import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { BADGES_DATA } from "@/data/data";

export default function PhysicsBadges() {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const container = sceneRef.current;
        let runner: Matter.Runner | null = null;
        let render: Matter.Render | null = null;

        // 1. On attend que le composant soit visible dans le viewport
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    startSimulation();
                    observer.disconnect(); // On ne le lance qu'une seule fois
                }
            },
            { threshold: 0.2 } // Se déclenche quand 20% du composant est visible
        );

        observer.observe(container);

        const startSimulation = () => {
            const width = container.clientWidth || 800;
            const height = container.clientHeight || 300;
            const pixelRatio = window.devicePixelRatio || 1;

            const engine = Matter.Engine.create({
                gravity: { x: 0, y: 0.8 },
            });
            engineRef.current = engine;

            render = Matter.Render.create({
                element: container,
                engine: engine,
                options: {
                    width: width,
                    height: height,
                    wireframes: false,
                    background: "transparent",
                    pixelRatio: pixelRatio,
                },
            });

            if (!render) return;

            // Murs invisibles
            const wallThickness = 100;
            const wallOptions = { isStatic: true, render: { visible: false } };

            const ground = Matter.Bodies.rectangle(
                width / 2,
                height + wallThickness / 2,
                width * 2,
                wallThickness,
                { ...wallOptions, friction: 0.5 }
            );
            const leftWall = Matter.Bodies.rectangle(
                -wallThickness / 2,
                height / 2,
                wallThickness,
                height * 2,
                wallOptions
            );
            const rightWall = Matter.Bodies.rectangle(
                width + wallThickness / 2,
                height / 2,
                wallThickness,
                height * 2,
                wallOptions
            );

            Matter.Composite.add(engine.world, [ground, leftWall, rightWall]);

            // Pastilles physiques avec chute échelonnée fluide
            const badgeBodies = BADGES_DATA.map((badge, index) => {
                const x = (width / (BADGES_DATA.length + 1)) * (index + 1);
                const y = -40 - index * 45; // Décalage pour éviter les collisions au départ

                return Matter.Bodies.circle(x, y, badge.size, {
                    restitution: 0.5,
                    friction: 0.1,
                    frictionAir: 0.01,
                    density: 0.001,
                    render: { fillStyle: badge.bg },
                });
            });

            Matter.Composite.add(engine.world, badgeBodies);

            // Souris / Touch
            const mouse = Matter.Mouse.create(render.canvas);
            const mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    damping: 0.1,
                    render: { visible: false },
                },
            });
            Matter.Mouse.setScale(mouse, { x: 1, y: 1 });
            Matter.Composite.add(engine.world, mouseConstraint);
            render.mouse = mouse;

            // Dessin des icônes
            Matter.Events.on(render as Matter.Render, "afterRender", () => {
                if (!render) return;
                const context = render.context;
                context.font = "bold 32px sans-serif";
                context.textAlign = "center";
                context.textBaseline = "middle";

                badgeBodies.forEach((body, index) => {
                    const badge = BADGES_DATA[index];
                    const { x, y } = body.position;
                    const angle = body.angle;

                    context.save();
                    context.translate(x, y);
                    context.rotate(angle);
                    context.fillStyle = badge.iconColor;
                    context.fillText(badge.label, 0, 0);
                    context.restore();
                });
            });

            // Lancement du moteur
            runner = Matter.Runner.create();
            Matter.Runner.run(runner, engine);
            Matter.Render.run(render);
        };

        return () => {
            observer.disconnect();
            if (render) Matter.Render.stop(render);
            if (runner) Matter.Runner.stop(runner);
            if (engineRef.current) {
                Matter.Composite.clear(engineRef.current.world, false);
                Matter.Engine.clear(engineRef.current);
            }
            if (render?.canvas) render.canvas.remove();
        };
    }, []);

    return (
        <div
            ref={sceneRef}
            className="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-500 opacity-100"
        />
    );
}

import Button from "@/components/ui/Button";
import React, { useState, type ChangeEvent, type FormEvent } from "react";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

type ContactFormProps = {
    accessKey?: string;
};

export const ContactForm: React.FC<ContactFormProps> = ({
    accessKey = "a4dafad1-587a-4bad-aefd-cb09d18aa4ee",
}) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation rigoureuse : vérifie si un champ est vide ou ne contient que des espaces
        if (
            !formData.firstName.trim() ||
            !formData.lastName.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()
        ) {
            setStatus("error");
            setErrorMessage("Veuillez remplir tous les champs obligatoires avant d'envoyer le message.");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    subject: `Nouveau message de ${formData.firstName} ${formData.lastName}`,
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                });
            } else {
                setStatus("error");
                setErrorMessage(
                    result.message ||
                        "Une erreur est survenue lors de l'envoi.",
                );
            }
        } catch (err) {
            setStatus("error");
            setErrorMessage("Erreur de connexion. Veuillez réessayer plus tard." + err);
        }
    };

    return (
        <div className="flex flex-col justify-center w-full max-w-3xl p-6 lg:p-10 mt-5 bg-white text-zinc-900 border border-line">
            {/* Message de succès */}
            {status === "success" ? (
                <div className="text-center space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wider">
                        Message envoyé avec succès !
                    </p>
                    <p className="mt-3.5 text-xs text-zinc-500">
                        Merci de nous avoir contactés. <br />Nous vous répondrons dans
                        les plus brefs délais.
                    </p>
                    <Button variant="solid" className="mt-7 text-center mx-auto" onClick={() => setStatus("idle")}>Envoyer un autre message</Button>
                </div>
            ) : (
                /* Formulaire */
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Ligne Prénom / Nom */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label
                                htmlFor="firstName"
                                className="block text-xs uppercase tracking-wider text-zinc-800"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                placeholder="Joseph"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-sm bg-white border border-line rounded-xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder-zinc-400"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label
                                htmlFor="lastName"
                                className="block text-xs uppercase tracking-wider text-zinc-800"
                            >
                                Prénom
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                placeholder="Durant"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-sm bg-white border border-line rounded-xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder-zinc-400"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="email"
                            className="block text-xs uppercase tracking-wider text-zinc-800"
                        >
                            EMAIL
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Joseph@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-sm bg-white border border-line rounded-xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder-zinc-400"
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="message"
                            className="block text-xs uppercase tracking-wider text-zinc-800"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            placeholder="Comment puis-je vous aider ?"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 text-sm bg-white border border-line rounded-xs focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all placeholder-zinc-400 resize-none"
                        />
                    </div>

                    {/* Message d'erreur éventuel */}
                    {status === "error" && (
                        <p className="text-xs text-red-600 font-medium">
                            {errorMessage}
                        </p>
                    )}

                    {/* Bouton de Soumission */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="border transition-colors duration-300 ease-in-out rounded-full cursor-pointer flex items-center justify-center gap-2 text-nowrap outline-none border-primary-400 hover:border-text bg-primary-400 hover:bg-text text-text hover:text-white px-5 py-2.5 h-10 text-[14px] tracking-[0.03rem] w-full"
                    >
                        <span>
                            {status === "loading"
                                ? "En cours d'envoi..."
                                : "Envoyez vos messages"}
                        </span>
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                        </svg>
                    </button>
                </form>
            )}
        </div>
    );
};

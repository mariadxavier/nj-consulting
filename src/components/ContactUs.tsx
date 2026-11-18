'use client';

import { useState, type FormEvent } from 'react';
import ContactButton from './ContactButton';
import WhatsAppMessage from '../util/WhatsAppMessage';
import type { ContactInfo } from '../types';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [attachment, setAttachment] = useState('');
    const [errors, setErrors] = useState<Partial<Record<keyof ContactInfo, string>>>({});

    function validate(): ContactInfo | null {
        const newErrors: typeof errors = {};

        if (!name.trim()) newErrors.name = 'Preencha seu nome';
        if (!city.trim()) newErrors.city = 'Preencha sua cidade';
        if (!attachment) newErrors.attachment = 'Selecione seu vínculo';

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return null;

        return { name: name.trim(), city: city.trim(), attachment };
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const info = validate();
        if (!info) return;

        const url = WhatsAppMessage.buildContactUrl(info);
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <section id='contact-us' className="flex flex-col justify-center gap-5 p-5 md:py-8 lg:py-12 lg:px-10">
            <h1 className="font-semibold text-3xl text-(--color-black) xl:text-4xl">Converse com alguém do nosso time.</h1>
            <div className='flex flex-col justify-center gap-5 lg:flex-row lg:justify-between'>
                <p className="text-(--color-gray) text-sm xl:text-[1rem]">Atendimento pelo WhatsApp, de segunda a sexta.</p>
                <form className="flex flex-col gap-4 p-5 bg-(--color-green-light-bg) rounded-xl md:self-center md:max-w-[600px] xl:max-w-[55%]" onSubmit={handleSubmit}>
                    <h1 className="font-semibold text-xl text-(--color-black)">Envie seus dados pelo WhatsApp</h1>
                    <p className="text-(--color-gray)">Preencha para montar uma mensagem. Você confere e envia pelo WhatsApp.</p>

                    <div className="flex flex-col gap-2">
                        <label className="text-(--color-black) text-sm xl:text-[1rem] font-semibold" htmlFor="contact-name">Nome</label>
                        <input
                            id="contact-name"
                            className={`p-3 rounded-lg border bg-(--color-white) text-(--color-gray) text-xs xl:text-sm ${errors.name ? 'border-red-500' : 'border-(--color-green-light)'}`}
                            type="text"
                            placeholder="Como você gostaria de ser chamado"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <span className="text-red-500 text-xs xl:text-sm">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-(--color-black) text-sm xl:text-[1rem] font-semibold" htmlFor="contact-city">Cidade</label>
                        <input
                            id="contact-city"
                            className={`p-3 rounded-lg border bg-(--color-white) text-(--color-gray) text-xs xl:text-sm ${errors.city ? 'border-red-500' : 'border-(--color-green-light)'}`}
                            type="text"
                            placeholder="Cidade onde você trabalha"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        {errors.city && <span className="text-red-500 text-xs xl:text-sm">{errors.city}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-(--color-black) text-sm xl:text-[1rem] font-semibold" htmlFor="contact-attachment">Vínculo</label>
                        <select
                            id="contact-attachment"
                            className={`p-3 rounded-lg border bg-(--color-white) text-(--color-gray) text-xs xl:text-sm ${errors.attachment ? 'border-red-500' : 'border-(--color-green-light)'}`}
                            value={attachment}
                            onChange={(e) => setAttachment(e.target.value)}
                        >
                            <option value="">Selecione seu vínculo</option>
                            <option value="Sou servidor(a) público(a) - Federal">Sou servidor(a) público(a) - Federal</option>
                            <option value="Sou servidor(a) público(a) - Estadual">Sou servidor(a) público(a) - Estadual</option>
                            <option value="Sou servidor(a) público(a) - Municipal">Sou servidor(a) público(a) - Municipal</option>
                            <option value="Não sou servidor(a) público(a)">Não sou servidor(a) público(a)</option>
                        </select>
                        {errors.attachment && <span className="text-red-500 text-xs xl:text-sm">{errors.attachment}</span>}
                    </div>

                    <ContactButton asSubmit />
                    <p className="text-(--color-gray) text-xs xl:text-sm">Os dados apenas montam uma mensagem para revisar e enviar no WhatsApp. Nenhum dado é enviado a servidores.</p>
                </form>
            </div>
        </section>
    );
}

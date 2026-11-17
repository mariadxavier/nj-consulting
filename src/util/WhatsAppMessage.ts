import { ContactInfo } from "../types";

const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_COMERCIAL_PHONE_NUMBER;

class WhatsAppMessage {
  buildContactUrl({ name, city, attachment }: ContactInfo): string {
    const message = `Olá, me chamo ${name}, sou de ${city} e ${attachment.toLocaleLowerCase()}. Vim do site da NJ Consulting e gostaria de mais informações.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  }

  getContactUrl(info?: ContactInfo): string {
    if (!info) {
        const message = "Olá, vim do site da NJ Consulting e gostaria de mais informações"
         return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    }
    return this.buildContactUrl(info)
  }
}

export default new WhatsAppMessage();
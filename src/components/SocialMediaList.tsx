import SocialMediaChip from './SocialMediaChip';
import FacebookIcon from '@/src/assets/FacebookIcon.svg'
import InstagramIcon from '@/src/assets/InstagramIcon.svg'
import LinkedInIcon from '@/src/assets/LinkedInIcon.svg'
import WhatsAppIcon from '@/src/assets/WhatsAppIcon.svg'
import WhatsAppMessage from '../util/WhatsAppMessage';

export default function SocialMediaList() {
  const whatsAppLink = WhatsAppMessage.getContactUrl();
  const linkedInLink = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN;
  const facebookLink = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK;
  const instagramLink = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM;
  return (
    <div className='flex gap-3 items-center'>
      <SocialMediaChip name='WhatsApp' link={whatsAppLink || ''} icon={WhatsAppIcon} />
      <SocialMediaChip name='Facebook' link={facebookLink || ''} icon={FacebookIcon} />
      <SocialMediaChip name='LinkedIn' link={linkedInLink || ''} icon={LinkedInIcon} />
      <SocialMediaChip name='Instagram' link={instagramLink || ''} icon={InstagramIcon} />
    </div>
  );
}

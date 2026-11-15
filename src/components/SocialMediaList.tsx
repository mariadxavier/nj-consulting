import SocialMediaChip from './SocialMediaChip';
import FacebookIcon from '@/src/assets/FacebookIcon.svg'
import InstagramIcon from '@/src/assets/InstagramIcon.svg'
import LinkedInIcon from '@/src/assets/LinkedInIcon.svg'

export default function SocialMediaList() {
  const linkedInLink = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN;
  const facebookLink = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK;
  const instagramLink = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM;
  return (
    <div className='flex gap-3 items-center'>
      <SocialMediaChip name='Facebook' link={facebookLink || ''} icon={FacebookIcon} />
      <SocialMediaChip name='LinkedIn' link={linkedInLink || ''} icon={LinkedInIcon} />
      <SocialMediaChip name='Instagram' link={instagramLink || ''} icon={InstagramIcon} />
    </div>
  );
}

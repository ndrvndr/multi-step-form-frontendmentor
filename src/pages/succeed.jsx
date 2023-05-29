import AuthLayout from "../components/Layout/AuthLayout";
import IconThankYou from "../assets/images/Icon-thank-you.svg";

const Succeed = () => {
  return (
    <AuthLayout>
      <div className='flex flex-col items-center'>
        <div className='relative -top-16 flex h-fit w-[90%] flex-col items-center rounded-xl bg-neutral-white px-6 py-16 drop-shadow-sm'>
          <img src={IconThankYou} alt='Icon Thank You' className='w-14' />
          <h1 className='mb-2 mt-7 text-center text-2xl font-bold text-primary-marine-blue'>
            Thank you!
          </h1>
          <p className='mb-5 text-center text-lg leading-7 tracking-tight text-neutral-cool-gray'>
            Thanks for confirming yout subscription! We hope you have fun usin
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Succeed;

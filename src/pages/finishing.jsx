import AuthLayout from "../components/Layout/AuthLayout";
import NavigationButton from "../components/Elements/NavigationButton";
import Details from "../components/Fragments/Details";

const Finishing = () => {
  const enabled = JSON.parse(localStorage.getItem("Enabled"));
  const plan = JSON.parse(localStorage.getItem("Plan"));
  const checkboxData = JSON.parse(localStorage.getItem("checkboxData"));

  let total = 0;

  if (checkboxData) {
    total = Object.values(checkboxData).reduce((acc, data) => {
      const { price } = data;
      return acc + parseInt(price, 10);
    }, 0);
  }

  if (plan && plan.Price) {
    total += parseInt(plan.Price, 10);
  }

  return (
    <AuthLayout>
      <div className='flex flex-col items-center'>
        <div className='relative -top-16 h-fit w-[90%] rounded-xl bg-neutral-white px-6 py-8 drop-shadow-sm'>
          <h1 className='mb-2 text-2xl font-bold text-primary-marine-blue'>
            Finishing up
          </h1>
          <p className='mb-5 text-lg leading-7 tracking-tight text-neutral-cool-gray'>
            Double-check everything looks OK before confirming
          </p>
          <Details />
          <div className='mt-2 flex items-center justify-between rounded-md bg-neutral-white px-4 pt-4'>
            <span className='text-neutral-cool-gray'>
              Total {enabled ? "(per year)" : "(per month)"}
            </span>
            <span className='font-bold text-primary-purplish-blue'>
              +${total}/{enabled ? "yr" : "mo"}
            </span>
          </div>
        </div>
        <div className='fixed bottom-0 flex h-20 w-full items-center justify-between bg-white px-5'>
          <NavigationButton
            label='Go Back'
            bgColor='bg-neutral-white'
            textColor='text-neutral-cool-gray'
            fontStyle='font-medium'
            path='/plan/addons'
          />
          <NavigationButton
            label='Confirm'
            bgColor='bg-primary-purplish-blue'
            textColor='text-neutral-white'
            fontStyle='font-normal'
            path='/plan/addons/finishing/succeed'
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Finishing;

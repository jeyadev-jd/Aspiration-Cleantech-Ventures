
import PageTitle from '@/components/sections/pageTitle';
import RegistrationForm from '@/components/sections/academy/RegistrationForm';
import PartnersOne from '@/components/sections/partners/partnersOne';

const AcademyRegister = () => {
    return (
        <>
            <PageTitle title="Academy Registration" currentPage="Register" />
            <RegistrationForm />
            <PartnersOne title="Placement In 30+ Brands" />
        </>
    );
};

export default AcademyRegister;

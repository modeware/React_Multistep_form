import Form from '../../molecules/form/form';
import Input from './../../atoms/input/index';
import Button from './../../atoms/button/button';

const RegistrationForm = ({children, ...props}) =>{

        return <Form {...props}>
                    {children}
                </Form>
}

export default RegistrationForm;
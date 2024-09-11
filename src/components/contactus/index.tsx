import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Htext from '@/shared/Htext';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const ContactUs = ({ setSelectedPage }: Props) => {

    const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

const {
    register, 
    trigger,
    formState: { errors }
} = useForm();

const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
        e.preventDefault();
    }
}


  return (
    <section 
    id='contactus' 
    className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            {/* header */}
            <motion.div 
            className='md:w-3/5'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0}
                }} 
            >
                <Htext>
                    <span 
                    className="text-primary-500"
                    >
                        Join Now
                    </span> 
                TO GET IN SHAPE
                </Htext>
                <p 
                className='my-5'
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea.
                </p>
            </motion.div>

            {/* forms and images */}
            <div 
            className='mt-10 justify-between gap-6 md:flex'
            >
                <motion.div 
                className='mt-10 basis-3/5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50},
                    visible: { opacity: 1, y: 0}
                    }} 
                >
                    <form 
                    target='_blank'
                    onSubmit={onSubmit} 
                    action='https://formsubmit.co/selfmanademola@gmail.com'
                    method='POST'
                    >
                        <input 
                        className={inputStyles}
                        type='text'
                        placeholder='name'
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })} 
                        />
                        {errors.name && (
                            <p 
                            className='mt-1 text-primary-500'
                            >
                                {errors.name.type === "required" && "this field is required"}
                                {errors.name.type === "maxLength" && "name must not be more that 100"}
                            </p>
                        )}
                        <input 
                        className={inputStyles}
                        type='email'
                        placeholder='email'
                        {...register("email", {
                            required: true,
                            maxLength: 100,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,	
                        })} 
                        />
                        {errors.email && (
                            <p 
                            className='mt-1 text-primary-500'
                            >
                                {errors.email.type === "required" && "this field is required"}
                                {errors.email.type === "pattern" && "email is not correct"}
                            </p>
                        )}

                        <textarea 
                        className={inputStyles}
                        rows={4}
                        cols={50}
                        placeholder='MESSAGE'
                        {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })} 
                        />
                        {errors.message && (
                            <p 
                            className='mt-1 text-primary-500'
                            >
                                {errors.message.type === "required" && "this field is required"}
                                {errors.message.type === "maxLength" && "name must not be more that 2000"}
                            </p>
                        )}

                        <button 
                        type='submit' 
                        className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                            SUBMIT
                        </button>
                    </form>
                </motion.div>

                <motion.div 
                className='relative mt-16 basis-2/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50},
                    visible: { opacity: 1, y: 0}
                }} 
                >
                    <div 
                    className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                        <img 
                        alt='contact-us' 
                        src="./ContactUsPageGraphic.png" 
                        className='w-full' 
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs;
import { ClassType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from '@/shared/Htext';
import Class from './Class';


const classes: Array<ClassType> = [
    {
        name: "weight Traing classes",
        image: image1,
    },
    {
        name: "Fitness Traing classes",
        description: "lorem ipsum dolor sit amet con et just sed diam non pro pos reprehenderit in voluptate velit esse cillum dolore mag nunc sed",
        image: image2,
    },
    {
        name: "adventure Traing classes",
        description: "lorem ipsum dolor sit amet con et just sed diam non pro pos reprehenderit in voluptate velit esse cillum dolore mag nunc sed",
        image: image3,
    },
    {
        name: "yoga Traing classes",
        description: "lorem ipsum dolor sit amet con et just sed diam non pro pos reprehenderit in voluptate velit esse cillum dolore mag nunc sed",
        image: image4,
    },
    {
        name: "weight Traing classes",
        description: "lorem ipsum dolor sit amet con et just sed diam non pro pos reprehenderit in voluptate velit esse cillum dolore mag nunc sed",
        image: image5,
    },
    {
        name: "weight Traing classes",
        description: "lorem ipsum dolor sit amet con et just sed diam non pro pos reprehenderit in voluptate velit esse cillum dolore mag nunc sed",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className='w-full bg-primary-100 py-40' id='ourclasses'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div 
            className='mx-auto w-5/6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0}
                }} 
            >
                <div className='md:w-3/5'>
                    <Htext>
                        Our Classes
                    </Htext>
                    <p className='py-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Ratione dignissimos modi exercitationem repudiandae atque earum?
                    </p>
                </div>
            </motion.div>
            <div 
            className='mt-10 h-[353px] w-full 
            overflow-x-auto overflow-y-hidden'
            >
                <ul 
                className='w-[2800px] whitespace-nowrap'
                >
                    {classes.map((item: ClassType, index) => (
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image} 
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses;
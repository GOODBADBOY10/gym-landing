import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types"
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the art facilities",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "States of the art facilities",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Home of the art facilities",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing",
    }
];


const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* header comments */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0}
                }} 
            >
                <Htext>MORE THAN JUST A GYM.</Htext>
                <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Vel aperiam quas, culpa, nemo earum enim minus aliquam nobis autem nulla eius voluptas. 
                    Sed hic praesentium nulla, repellat fuga veniam unde.</p>
            </motion.div>

            {/* Benefits */}
            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container} 
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                    key={benefit.title} 
                    icon={benefit.icon} 
                    title={benefit.title} 
                    description={benefit.description} 
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* graphics and description */}
            <div 
            className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"
            >
                {/* graphic */}
                <img 
                alt='benefits-page-graphic' 
                src="./BenefitsPageGraphic.png" 
                className="mx-auto" 
                />

                {/* description */}
                <div>
                    {/* title */}
                    <div 
                    className="relative">
                        <div 
                        className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves"
                        >
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50},
                                visible: { opacity: 1, x: 0}
                                }} 
                            >
                                <Htext>
                                    MIllions of happy members getting {" "}
                                    <span className="text-primary-500">FIT</span>
                                </Htext>
                            </motion.div>
                        </div>
                    </div>

                    {/* desription */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50},
                        visible: { opacity: 1, x: 0}
                        }} 
                    >
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Numquam at velit laborum tenetur saepe architecto eum ullam rerum aliquam qui!</p>
                        <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Officiis blanditiis quas quae facilis a recusandae.</p>
                    </motion.div>


                    {/* buttons */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;
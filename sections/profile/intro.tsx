import {SocialIcons} from "../../components/social-icons";

const IntroBlock = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between mb-16 p-5 md:p-8">
            <div className="flex flex-col">
                <h1 className="mb-3 font-bold text-2xl md:text-3xl lg:text-4xl">
                    Sangeet Khatri
                </h1>
                <span className="text-xl md:text-2xl">Full Stack Developer</span>
                <span className="text-sm">Setubal, Portugal</span>
            </div>
            <div className="flex flex-col md:text-right mt-5">
                <span className="text-2xl">+351 910 749 525</span>
                <span className="mt-1">sangeet.khatri@outlook.com</span>
                <div className="flex flex-wrap justify-end gap-3 mt-5">
                    <SocialIcons/>
                </div>
            </div>
        </div>
    );
};

export {IntroBlock};

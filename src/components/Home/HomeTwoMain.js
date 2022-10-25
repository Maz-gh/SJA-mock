import React from 'react';
import dynamic from 'next/dynamic';
const CategorySlider = dynamic(() => import('../Elements/Slider/CategorySlider'), {
    ssr: false
  })
import CourseTabTwo from '../Elements/Tabs/CourseTabTwo';
import FeatureSection from '../Home/FeatureSection';
import TopCategorySection from './TopCategorySection';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import HeroSectionTwo from './HeroSectionTwo';
import PartnerSection from './PartnerSection';
import SkillSection from './SkillSection';
import TeacherSection from './TeacherSection';
import ZoomSection from './ZoomSection';


const HomeTwoMain = () => {
    return (
        <main>
            <HeroSectionTwo />
            <TopCategorySection />
            <CategorySlider />
            <AboutSection />
            <FeatureSection />
            <CourseTabTwo />
            <PartnerSection />
            <TeacherSection />
            <ZoomSection />
            {/* <SkillSection /> */}
            <BlogSection />
        </main>
    );
};

export default HomeTwoMain;
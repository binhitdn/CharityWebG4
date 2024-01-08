import React from "react";
import SectionSponsor from "../../components/pages/Contributors/SectionSponsor";
import Slider from "../../components/Slider/Slider";
import { useTranslation } from "react-i18next";

const contributors = [
  {
    id: 1,
    name: "Bruce Roberts",
    role: "Volunteer leader",
    avatar:
      "https://cpad.ask.fm/191/071/915/-59996988-202kp5r-5mgotbogtgnq9hf/original/avatar.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Volunteer",
    avatar:
      "https://cpad.ask.fm/191/071/915/-59996988-202kp5r-5mgotbogtgnq9hf/original/avatar.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  {
    id: 3,
    name: "Helen Keller",
    role: "Creative Director",
    avatar:
      "https://cpad.ask.fm/191/071/915/-59996988-202kp5r-5mgotbogtgnq9hf/original/avatar.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  // Add more contributors as needed
];

const Contributor = () => {
  const { t } = useTranslation("translationContributors");
  const { i18n } = useTranslation();
  const LANG_CODE = i18n.language;
  return (
    <div>
      <Slider />
      <div className="area">
        <div className="container">
          {/* Tinh nguyen vien */}
          <div className="row justify-center pt-20">
            <div className="col-xl-12 col-lg-7 col-md-10 col-sm-10">
              <div className="section-tittle section-tittle2 text-center mb-10">
                <h2 className="text-3xl font-bold">{t("creator")}</h2>
              </div>
              <div className="text-right pb-5">
                <div className="font-bold text-green-400 text-xl leading-10">
                  Dinh Thi Dong Phuong
                </div>
                <div className="">
                  Email : dinhdongphuong@gmal.com
                  <br></br>
                  Phone : 0962414125

                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/3 leading-9 pr-8 text-left" >
              I was born and raised in a rural area of Quang Nam province. My
              childhood was filled with experiences in nature and love. I played
              all kinds of games, including hide and seek, shooting arrows,
              shooting marbles, playing the leaf trumpet, playing checkers,
              jumping rope, catching fish and catching crabs, climbing trees to
              pick fruit, going into caves to catch bats, etc. with the kids in
              my village. My father was a teacher but he was also a very good
              farmer. In addition to the the main work, he did all sorts of
              things. He reclaimed land for farming of rice, raising livestock,
              making wine, making vermicelli, making noodles, cutting hair,
              repairing bicycles, building houses, etc. My mother was also a
              teacher, and she also did all sorts of things after working in the
              school. She made herbal medicine, was a tutor, sold things for
              money, etc. My parents always support each other in living life. I
              followed my father and mother in most of their activities. I
              experienced and learned many interesting things from them. I went
              to university, went to work, then studied abroad and worked in
              Japan from 2026 to 2020. I participated in many practical
              activities in Japan, too. I experienced growing rice, growing
              potatoes, growing vegetables, cooking, making pies, processing
              meat and fish, outdoor camping, fire extinguisher, etc. I also
              experienced working as an IT project manager, a researcher in IT,
              psychology and education, a lecturer in Ritsumeikan University., a
              helper and supporter for Vietnamese Association group in Japan.
          
            </div>
            <div className="w-full md:w-1/3 ">
              <img
                src="/contribute/founderavt.jpg"
                alt=""
                className="w-full md:w-96"
              />
            </div>
          </div>
          <div className="row justify-center pt-20">
            <div className="col-xl-12 col-lg-7 col-md-10 col-sm-10">
              <div className="section-tittle section-tittle2 text-center mb-10">
                <h2 className="text-3xl font-bold">{t("creator")}</h2>
              </div>
              <div className="text-left pb-5">
                <div className="font-bold text-green-400 text-xl leading-10">
                  Gérard Kucharski
                </div>
                <div className="">
                  Email : Kucger07@gmail.com

                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 pr-8">
              <img
                src="/contribute/founderavt1.jpg"
                alt=""
                className="w-full md:w-96"
              />
            </div>
            <div className="w-full md:w-2/3 text-base leading-9">
              I have decided to join this project to experience many activities
              which I have never experienced before. Like many of us, I like
              something challenging and contributive to people and environment.
              I have joined many activities such as gardening, planting,
              cooking, etc. and they are very interesting. I feel more
              confident, braver, and happier after I join this project. I feel
              love myself more, and understand people more. I have joined many
              activities with the founder, Ms. Phuong. We have mentored children
              who are afraid of water so that they can get familiar with water
              and be able to swim. We joined English classes to help children
              who are afraid of speaking English so that they feel happy with
              playing and communicating. This organization is a small structure
              that uses the funds raised in full to help people directly. The
              whole project is planed for 5 years including many small projects
              to improve living standard and life skills for these villagers. It
              develops the existing know-how, respect for the environment,
              collective and personal development, sharing, etc. Its a
              wonderful project that I invite you to join, to share, to give
              hope to all these people these men these women their children to
              this magnificent village.
            </div>
          </div>
          <div className="row justify-center pt-20">
            <div className="col-xl-12 col-lg-7 col-md-10 col-sm-10">
              <div className="section-tittle section-tittle2 text-center mb-10">
                <h2 className="text-3xl font-bold">{t("donator")}</h2>
              </div>
            </div>
          </div>
          <SectionSponsor />
        </div>
      </div>
    </div>
  );
};

export default Contributor;

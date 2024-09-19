import './about.css';
import React, { useState } from 'react';

function About() {


  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="about-container">
      <h1 className="about-title">About the App</h1>

      <div className="about-section">
        <button className="about-section-button" onClick={() => toggleSection(1)}>
          Why I built this app
        </button>
        {openSection === 1 && (
          <div className="about-section-content">
            <p>TLDR: Dating sucks I want to fix it. <br></br> <br></br> It is my opinion, and I'm sure of many others, that dating has become quite complicated in the modern era. There are over a thousand dating apps and or websites to help people find each other, and dating apps and or social media have quickly become the number one way for people to connect with each other to find romance. If we're more connected than ever, and people have so much access, then why has it become so hard for people to date? With marriage at an all time low people aren't getting together, and or staying together at the same rate as they have in the past. There are many multi-varied reasons for this occurring, but one of the most important ones in my opinion is standards. <br></br> <br></br>

                Standards in regards to dating is the bare minimum a person would accept in order to date or take someone seriously. These “standards” for better or for worse have changed drastically over the past century, and have lowered the amount of long term relationships that are currently occurring. There are many different reasons people develop relationship standards such as: ego, trauma, self-preservation, self-worth, the list goes on. However, if a person has these standards, but doesn't have the value to demand said standards, then the standards become wishful thinking. For example, if I were to state that it is my standard for the person I'm dating to take me to the world's most expensive date on the first date, there is a very good chance that I may never have a first date and will be single for the rest of my life. However, if I was the most beautiful person in the world, and everyone thought of me as such, my chances of having my standards met would rise drastically. My point in this analogy is to illustrate that having standards without the value to back up said standards is nothing more than wishful thinking. If I stated that I was the most beautiful person in the world visually speaking, and no one in the world validated my claim, then it is simply an untrue statement at that point. Any standards built on said claim would cease to become attainable, and when expectations don't meet reality, you're left with nothing but disappointment. <br></br><br></br>

                The reason I created this app is to allow people to get true insight and an assessment into what the world perceives a person to be visually. People are infinitely more than just their appearance, and I truly believe this, however I would be lying if i didn't say that we didn't judge a book by its cover when it comes to dating. People in general assign a large amount of value to a  person's level of attractiveness, and if someone knows where they stand, they can leverage that to have their standards met, and or adjust their standards if they're too high, or raise them if the value is high enough.  Life isn't fair and sometimes the deck just isn't stacked in our favor, but I believe if you know where you stand, people can use that to their advantage to increase their odds of getting the outcomes they desire. If people can find an honest assessment of how others viewed them visually, and people knew the amount of people that met their standards, I believe more people would develop more realistic dating standards, and people would have better odds of finding longer lasting relationships.

                I understand there is more nuance to dating that looks and that boiling people down to a number can set a dangerous precedent.  However, I believe we as people already do this. I just want to live in a world where we can be more honest with not only each other, but with ourselves.
            </p>
          </div>
        )}
      </div>

      <div className="about-section">
        <button className="about-section-button" onClick={() => toggleSection(2)}>
          Future of the App
        </button>
        {openSection === 2 && (
          <div className="about-section-content">
            <p>
            In the future, I would like to include a second feature that would allow users to receive a more comprehensive or “overall”  rating other than appearance. This ratings would include things such as: 
<ul>Income</ul>
<ul>Vocation</ul>
<ul>Number of children</ul>

This “overall rating” would allow users to get a more accurate assessment of their rating and would allow users to have two different ratings which they can compare and or average together. Should this step and the previous step be successful, I would like to transform Hypergamy into a dating app that would allow people to not only rate people and or receive ratings, but allow users to sort people by ratings amongst other standards. This would then give those who are placing their standards feedback in real time using data collected from the app. For example, if a user is searching for another user that is 6'0ft, makes 50k a year, and has no children, they can input that and the app will give them a hard number of  the number of other users that also fit this metric as well as a person's rating. It would also allow users to see other people's metrics. Another example would be a person searching for someone with the same metrics mentioned above. The app would show them the amount of people who fit those metrics, then it would subtract users shown based on what those users metrics were.  I would also add an option for people to list their dating or relationship status on the app. This wouldn't be used or showcased in a user's rating, but would allow the app to give an accurate assessment in the pool of people that are available, or unavailable in dating. I would also like to hire professional accredited image consultants to give people ratings. This would allow users the option to allow others to see them being rated by a professional for insight to how a professional would rate a person.
            </p>
          </div>
        )}
      </div>

      <div className="about-section">
        <button className="about-section-button" onClick={() => toggleSection(3)}>
          How else can the app help me
        </button>
        {openSection === 3 && (
          <div className="about-section-content">
            <p>
            On top knowing what others truely think of your appearance, Hypergamy can help you figure out what other things can potentially help you when it comes to dating. For example, If I wanted help with dressing better, improving personal fitness, and or taking pictures, I would like to be able to provide those resources to people that are looking for them. In the future, I will be adding a resources page that will connect people with professionals in each of these respective fields to help people acheive becoming the best version of themselves.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


export default About;
import "./index.scss";

import Layout from "../components/layout";
import React from "react";
import { SocialIcon } from "react-social-icons";
import brandLogos from "../components/brand-logos";

const {
  CurrentMood: CurrentMoodLogo,
  FLDWRK: FLDWRKLogo,
  Yellow: YellowLogo,
  Buenas: BuenasLogo,
  Formation: FormationLogo,
  // LetsBeKind: LetsBeKindLogo,
  // Standard: StandardLogo
} = brandLogos;

const Home = () => (
  <Layout className="home">
    <section className="intro">
      {/* <p>
        At Common Good Network, we have a dream that one day, all cities will be
        full of redemptive communities creating symphonic justice. But there’s a
        problem--the challenges of this world are too overwhelming and complex
        for any single entity to solve alone. So we created a management firm to
        lead redemptive communities in advancing the common good together.
      </p> */}
      <p>
        The challenges of the world are too overwhelming and difficult for any
        single entity to solve alone. We exist to lead our brands in advancing
        the common good, together. We manage a family of brands that each work
        to address the challenges of the world for the good of all people.
      </p>
    </section>
    <section className="brands">
      <h2>Network of Brands</h2>
      <div className="brand">
        <div className="brandLogo">
          <a href="https://fldwrk.io">
            <FLDWRKLogo className="fldwrkLogo" />
          </a>
        </div>
        <div>
          <p>
            FLDWRK has a dream that one day, all cities will be full of
            organizations that are advancing the common good together.
            {/* But there’s a problem--working alone robs leaders of their humanity and
            impact. So we built a social good incubator that guides leaders and
            startups to collectively build organizations into forces for good in
            their cities. Currently, we’re working so that by the end of 2020,
            400 creators are building 44 organizations into forces for good in
            10 cities. */}
          </p>
          <a href="https://fldwrk.io" className="btn btn-dark brandLink">
            fldwrk.io
          </a>
        </div>
      </div>
      <div className="brand">
        <div className="brandLogo">
          <a href="https://yellowco.co">
            <YellowLogo className="yellowLogo" />
          </a>
        </div>
        <div>
          <p>
            Yellow has a dream that one day, all female leaders will know
            themselves to lead themselves to lead others into meaningful work.
            {/* But there’s a problem--boss culture requires disconnection and
            inhibits change. So we created an empowering community that convenes
            and guides female leaders into meaningful work. By the end of 2020,
            our goal is for 2,500 Yellow members to be collectively working as
            agents of good in their cities. */}
          </p>
          <a href="https://yellowco.co" className="btn btn-dark brandLink">
            yellowco.co
          </a>
        </div>
      </div>
      <div className="brand">
        <div className="brandLogo">
          <a href="https://formation.ceo">
            <FormationLogo className="formationLogo" />
          </a>
        </div>
        <div>
          <p>
            Formation has a dream that one day all cities will be full of
            organizations advancing the common good together.
            {/* But there’s a
            problem: Our culture of individualism along with positional
            isolation robs top leaders, their organizations, and cities of their
            humanity and impact. We exist for top leaders to build organizations
            into forces for good in their cities. By the end of 2020, our goal
            is to have 3 certified guides leading 20 top leaders. */}
          </p>
          <a href="https://formation.ceo" className="btn btn-dark brandLink">
            formation.ceo
          </a>
        </div>
      </div>
      <div className="brand">
        <div className="brandLogo">
          <a href="https://buenas.coffee">
            <BuenasLogo className="buenasLogo" />
          </a>
        </div>
        <div>
          <p>
            Buenas has a dream that one day, third places would host people with
            honor, generosity, and presence.
            {/* But there’s a problem--greed
            reduces people to transactions. So we’ve created a coffee shop
            community that fuels good people to do good work in the world.
            Currently, were working so that by the end of 2020, over 60,000
            drinks and meals are fueling good people, 200 of which are actively
            engaged in a more sustainable lifestyle as a result of their
            membership in the community. */}
          </p>
          <a href="https://buenas.coffee" className="btn btn-dark brandLink">
            buenas.coffee
          </a>
        </div>
      </div>
      <div className="brand">
        <div className="brandLogo">
          <a href="https://currentmood.is">
            <CurrentMoodLogo className="currentMoodLogo" />
          </a>
        </div>
        <div>
          <p>Know how you feel. Act with Intention</p>
          <a href="https://currentmood.is" className="btn btn-dark brandLink">
            currentmood.is
          </a>
        </div>
      </div>
    </section>
    <section className="team">
      <h2>Leadership Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="/images/brandon.jpg" className="rounded img-fluid" />
          <h3>Brandon Arbini</h3>
          <div className="socialIcons">
            <SocialIcon
              url="https://www.linkedin.com/in/brandonarbini/"
              className="socialIcon"
              bgColor="#343a40"
            />
            <SocialIcon
              url="mailto:b@commongood.network"
              className="socialIcon"
              bgColor="#343a40"
            />
          </div>
          <p>Tech Entrepreneur, Y Combinator Alum, Software Engineer</p>
        </div>
        <div className="team-member">
          <img src="/images/jeff.jpg" className="rounded img-fluid" />
          <h3>Jeff Tanner</h3>
          <div className="socialIcons">
            <SocialIcon
              url="https://www.linkedin.com/in/jeffreyltanner/"
              className="socialIcon"
              bgColor="#343a40"
            />
            <SocialIcon
              url="mailto:jeff@commongood.network"
              className="socialIcon"
              bgColor="#343a40"
            />
          </div>
          <p>
            Startup Coach, Organizational Leadership and Development Consultant,
            Pastor
          </p>
        </div>
        <div className="team-member">
          <img src="/images/joanna.jpg" className="rounded img-fluid" />
          <h3>Joanna Waterfall</h3>
          <div className="socialIcons">
            <SocialIcon
              url="https://www.linkedin.com/in/joannanoel/"
              className="socialIcon"
              bgColor="#343a40"
            />
            <SocialIcon
              url="mailto:joanna@commongood.network"
              className="socialIcon"
              bgColor="#343a40"
            />
          </div>
          <p>Graphic Designer, Artist, Conference Speaker and Host</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;

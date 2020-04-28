import PropTypes from 'prop-types'
import React from 'react'
import about from '../images/about.jpg'
import lessons from '../images/lessons.jpg'
import intro from '../images/intro.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">What is Beach School?</h2>
          <span className="image main">
            <img src={intro} alt="" />
            <p className='reference'>Photo by Razvan Narcis Ticu on Unsplash</p>
          </span>
          <p>
          Beach School provides children with the opportunity to visit, learn about and fall in love with the beach through hands-on learning. It raises children’s awareness of local and global coastal environments, inspiring them to assist in conservation efforts. Consequently, this helps to safeguard our seas and beaches for future generations.
          </p>
          <p>
          Using a variety of fun games and activities, children acquire new skills, expand their knowledge and are actively encouraged to explore their natural surroundings. This style of learning is strongly child-led, so no two beach school sessions are the same.
          </p>

          <h3>The Importance of Going Outdoors</h3>
          <p>
          Health, as defined by The World Health Organization (2016) is a state of total physical, mental and social well-being (The World Health Organization 2016). Moreover, wellbeing was defined by Dodge et al. (2012) as a condition where an individual has the physical, psychological and social means to overcome psychological, social and/or physical challenges.
          </p>
          
          <p>
          Outdoor activities and contact with nature is not only fun, but also encompasses fitness, stress management, education and social bonding. Time spent in the natural environment can provide both immediate and long term physical, mental and social benefits (Lederbogen et al. 2011).
          </p>
          
          <p>
          In general, individuals who have access to nature are three times more likely to participate in physical activity and the risk of becoming overweight or obese is reduced by 40% (The Wildlife Trusts and RSPB 2014). Engagement with the natural environment can also facilitate the treatment of depression and other mental health illnesses (de Vries et al. 2010). The reduction of tension and depression was observed by Coon et al. (2011) and Mitten et al. (2016) in studies that monitored benefits of outdoor activity.
          </p>
          
          <p>
          Regarding Beach School education, the beach is a perfect example of a blue space. Blue spaces are described as those comprised of all observable surface water. These environments have displayed an ability to generate wellbeing benefits (Völker and Kistemann 2011). A study conducted by Wheeler et al (2012), found that self-reported good health was more prevalent the closer participants lived to the coast. Green nature and natural water environments were repeatedly preferred over other forms of nature by participants who felt relaxed. Those who were exhibiting happiness also frequently selected natural water environments (Regan and Horn 2005). This suggests that the natural environment, including the beach, is desirable when relaxing or enjoying recreational activities.
          </p>
          {close}
        </article>


        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={about} alt="" />
            <p className='reference'>On my Coastal Activity Course. Findhorn Beach, Scotland</p>
          </span>
          <p>Hello, I’m Hayley and I’m originally from Glasgow, Scotland. I’ve been in New Zealand since August 2019 and now live in Waihi Beach, Bay of Plenty. </p>

          <p>I have always had an interest in education and the marine environment. My passion and knowledge were developed by my Undergraduate Degree (Hons) in Environmental Geography and distance learning Marine Biology course. Following my Post Graduate Diploma in Secondary Education, I undertook my Level 2 Coastal Activity Leader training and Level 3 Beach School Practitioner course. I have also kept an up to date Outdoor First Aid qualification. </p>

          <p>Through my previous role as a Probationary Geography Teacher in Scotland, I endeavoured to provide my pupils with fun educational experiences. I gained considerable experience creating and delivering lessons, many of which focused on marine life and ocean plastic. Following the completion of my Probationary Year, I gained Full Registration with the General Teaching Council for Scotland. Since arriving in New Zealand, I received Provisional Registration with the Teaching Council of New Zealand. </p>

          <p>As well as becoming a Teacher, I worked as a BASI Alpine Level 1 Instructor for 4 years, which involved teaching groups of varying ages. Moreover, while living in Auckland for several months, I worked as a College Teacher Aide. Consequently, I have experience with supporting and engaging young people of varying abilities. </p>

          <p>Through my love of teaching, the marine environment and active working, I have decided to establish my own Beach School! I aim to educate and inspire people of all ages. But most of all, I want everyone to enjoy and have fun at the beach!</p>
          {close}
        </article>

        <article
          id="lessons"
          className={`${this.props.article === 'lessons' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Lessons</h2>
          <span className="image main">
            <img src={lessons} alt="" />
            <p className='reference'>Photo by Khürt Williams on Unsplash</p>
          </span>
          <p>
          I am offering schools and out of school Beach School sessions on a one off or short term basis. It can be timetabled into educational programmes or take place after school, at weekends or during holidays.
          </p>

          <h3>
          Beach School Topics
          </h3>
          <p>
          Any number of the following topics could be explored during a session:
          </p>
          <ul>
            <li>How to behave sensibly and act responsibly at the beach</li>
            <li>Seasons and tides</li>
            <li>Species identification and information</li>
            <li>How marine flora and fauna are adapted to survive in their environment</li>
            <li>Pressures on the marine environment; including over fishing and marine pollution</li>
            <li>Mini beach cleans</li>
            <li>Environmental/marine art</li>
          </ul>
          <p>
          I am also happy to discuss custom lessons.
          </p>
          <p>
          Through these activities, children will also develop important life skills such as team work, communication, and confidence in an outdoor setting.
          </p>
          <p>
          Unfortunately, children will not be permitted to go swimming during Beach School sessions. However, they will be able to stand at the water line and enjoy the water rushing over their feet.
          </p>

          <h3>
          Session Sizes and Ages
          </h3> 
          <p>
          For all sessions, the adult to children ratio will be 1:6. I feel smaller group sizes allows for more flexible and hands-on learning. This in turn, provides children with a higher quality learning experience.
          </p>
          <p>
          For schools, the ideal group size would be no larger than 10 children. This can be negotiable. Nevertheless, the support of Classroom Teachers and/or Teacher Aides will be required at the same adult to children ratio of 1:6.
          </p>
          <p>
          To book a lesson, please contact myself via the Contact section of this site. On booking a lesson, a confirmation email with date and time will be sent to your email address. After the lesson an invoice will be issued to the same email address.
          </p>
          <p>
          Sessions are tailored for children aged 4-8 and 9-13 years old. However, Parents are welcome to come along. I am also happy to discuss session for younger/older children or adults.
          </p>

          <h3>
          What to Wear and Bring to a Beach School Session
          </h3>
          <ul>
            <li>Shirts with sleeves and/or shoulder cover, collars</li>
            <li>Sun hats with wide brims and/or flaps.</li>
            <li>Spare jumper and warm hat</li>
            <li>Suitable waterproof jacket and waterproof trousers</li>
            <li>Sun cream</li>
            <li>Towel</li>
            <li>Sunglasses</li>
            <li>Water and any snacks</li>
            <li>Any required medication</li>
          </ul>
          <p>
          The natural world is always changing and going outside in all weather provides valuable learning experiences. Beach School will take place in all weather, unless it is unsafe to do so. Children must therefore come prepared. Unfortunately, I cannot supply wet or cold weather gear. 
          </p>
          <p>
          There is a public toilet at the car park where we meet, should a child need during the session. It can also be used for changing clothes. 
          </p>

          <h3>
          Health, Safety and Emergencies
          </h3>
          <p>
          At the start of every session there will be a safety briefing, which includes physical boundaries, safety guidelines and session specific expectations. Children must follow my instructions, so that everyone can enjoy the session in a fun, but safe manner.
          </p>
          <p>
          When necessary, I will use a whistle to gather children together or get immediate attention.
          </p>
          <p>
          Physical boundaries will be made clear using landmarks on or around the beach.
          </p>
          <p>
          Parents or the school will be informed immediately if a child is involved in any injuries, accidents, incidents, dangerous behaviour or unsafe use of equipment.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Me</h2>
          <h3>
            Email: <a href='mailto:hayley@beachschool.co.nz'>hayley@beachschool.co.nz</a>
          </h3>
          <h3>
            Mobile: <a href='tel:+6421968403'>+64 (0) 21 196 8403</a>
          </h3>
          <ul className="icons">
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/hayley-saunders/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

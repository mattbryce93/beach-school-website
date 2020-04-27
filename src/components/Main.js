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
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={intro} alt="" />
            <p className='reference'>Photo by Razvan Narcis Ticu on Unsplash</p>
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
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
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={about} alt="" />
            <p className='reference'>On my Coastal Activity Course. Findhorn Beach, Scotland</p>
          </span>
          <h3>About Me</h3>
          <p>
          Hello, I’m Hayley and I’m originally from Glasgow, Scotland. I've been in New Zealand since August 2019 and now live in Waihi Beach, Bay of Plenty. I am currently a Provisionally Registered Teacher with the Teaching Council of New Zealand, but I’m a Fully Registered Geography Teacher with the General Teaching Council for Scotland.
          </p>
          <p>
          I have always had an interest in education and the marine environment. My passion and knowledge were developed by my Undergraduate Degree in Environmental Geography and distance learning Marine Biology course.
          </p>
          <p>
          Through my previous role as a Geography Teacher in Scotland and Beach School Practitioner courses, I endeavoured to provide my pupils or potential client groups with fun educational experiences. I have considerable experience creating and delivering lessons, many of which focused on marine life and ocean plastic.
          </p>
          <p>
          As well as becoming a Teacher, I worked as a BASI Alpine Level 1 Instructor for 4 years, which involved teaching groups of varying ages. Moreover, while living in Auckland for several months, I worked as a College Teacher Aide. Consequently, I have experience with supporting and engaging young people of varying abilities.
          </p>
          <p>
          Through my love of teaching, the marine environment and active working, I have decided to establish my own Beach School. I aim to educate and inspire people of all ages. But most of all, I want everyone to enjoy and have fun at the beach!
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



          <h4>References:</h4>
          <p className='reference'>
          Coon, T.J., Boddy, K., Stein, K., Whear, R., Barton, J. and Depledge, M.H. (2011) Does Participating in Physical Activity in Outdoor Natural Environments Have a Greater Effect on Physical and Mental Wellbeing Than Physical Activity Indoors? A Systematic Review. Environmental Science & Technology. 45(5). pp. 1761-1772.
          </p>
          
          <p className='reference'>
          de Vries, S., van Dillen, S.M.E., Groenewegen, P. and Spreeuwenberg, P. (2010) Nearby nature and human health: stress, social cohesion and physical activity as possible mediators. In Forests for the future: Sustaining Society and the Environment, XXIII IUFRO World Congress, Seoul, Republic of Korea (pp. 462-462). The commonwealth forestry association.
          </p>
          
          <p className='reference'>
          Dodge, R., Daly, A., Huyton, J.r and Sanders, L. (2012) The Challenge of Defining Wellbeing. International Journal of Wellbeing. 2(3). pp. 222-235.
          </p>
          
          <p className='reference'>
          Lederbogen, F., Kirsch, P., Haddad, L., Streit, F., Tost, H., Schuch, P., Wüst, S., Pruessner, J.C., Rietschel, M., Deuschle, M. and Meyer-Lindenberg, A. (2011) City Living and Urban Upbringing Affect Neural Social Stress Processing in Humans. Nature. 474. pp. 498-501.
          </p>
          
          <p className='reference'>
          Mitten, D, Overholt, J.R., Haynes, F.I., D’Amore, C.C., and Ady, J.C. (2016) Hiking: A Low-Cost, Accessible Intervention to Promote Health Benefits. American Journal of Lifestyle Medicine. 1559827616658229.
          </p>
          
          <p className='reference'>
          Regan, C.L. and Horn, S.A. (2005) To Nature or Not to Nature: Associations between Environmental Preferences, Mood States and Demographic Factors. Journal of Environmental Psychology. 25(1). pp. 57-66.
          </p>
          
          <p className='reference'>
          The Wildlife Trusts and RSPB. (2014) A Nature and Wellbeing Act. Available: www.wildlifetrusts.org/sites/default/files/green_paper_nature_and_wellbeing_act_full_final. pdf [Accessed: 01/03/17].
          </p>
          
          <p className='reference'>
          Völker, S. and Kistemann, T. (2011) The Impact of Blue Space on Human Health and Well- Being–Salutogenetic Health Effects of Inland Surface Waters: A Review. International Journal of Hygiene and Environmental Health. 214(6). pp. 449-460.
          </p>
          
          <p className='reference'>
          Wheeler, B.W., White, M., Stahl-Timmins, W. and Depledge, M.H. (2012) Does Living by the Coast Improve Health and Wellbeing? Health & Place. 18(5). pp.1198-1201.
          </p>


          <p className='reference'>
          World Health Organization. (2016) Mental Health: Strengthening Our Response. Media Centre: Fact Sheets. Available: www.who.int/mediacentre/factsheets/fs220/en/ [Accessed: 20/03/17].
          </p>
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
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
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
          <h2 className="major">Contact</h2>
          <form method="GET" action="mailto:hayleysaunders09@gmail.com">
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
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

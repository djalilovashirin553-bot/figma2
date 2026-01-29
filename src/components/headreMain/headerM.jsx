import './headerM.css'
import a from '../../assets/a.svg'
import b from '../../assets/b.svg'
import d from '../../assets/d.svg'
import e from '../../assets/e.svg'
import f from '../../assets/f.svg'
import g from '../../assets/g.svg'

function HeadreMain(){
    return(
        <>
        <div className="total">
      <nav className="upper">
        <div className="brand">harbor</div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Know Your Risks</a>
          <a href="#">For Work</a>
          <a href="#">Journal</a>
          <a href="#">Shop</a>
        </div>
      </nav>

      <main className="prime">
        <h1 className="title">Reimagining readiness for<br /> life's uncertain moments.</h1>
        <p className="descr">
          The app that makes disaster preparedness easy and accessible.<br />
          Because sometimes tomorrow doesn't look like today.
        </p>

        <div className="store">
          <button className="apple">
            <span className="icon"><img src={b}/></span> App Store
          </button>
          <div className="googl">
            <button className="playr">
              <img src={d} alt="Google Play icon" /> Play Store
            </button>
            <span className="waitl">Join the Waitlist</span>
          </div>
        </div>
      </main>

      <div className="phone">
      <img src={a}/>
          </div>
        </div>
        <div className="asosy">
      <div className="tepaa">
        <h2 className="sarlv">The right plan for when<br /> things don't go as planned</h2>
        <p className="matnn">
          Not prepared? You're not alone. Emergency planning is overwhelming. 
          We work with experts to make the hard parts easy, so you can have confidence when it matters most.
        </p>
      </div>

      <div className="setka">

        <div className="karta binaf">
          <img src={e} alt="Family plan illustration" className="rasmm" />
          <div className="pastt">
            <span className="ikona">👥</span>
            <h3 className="kichk">Create your family's emergency plan</h3>
            <p className="izohh">Our app is tailored to you, your family and your little dog, too. We tell you what you need to stay safe from hurricanes to wildfires and everything in between.</p>
          </div>
        </div>

        <div className="karta kookk">
          <span className="ikona">📂</span>
          <h3 className="kichk">Access and share important information, even offline</h3>
          <p className="izohh">View critical information, family plans, and documents at the push of a button, both online and offline - no worries if cell towers go out.</p>
          <img src={f}alt="Document management illustration" className="rasmm" />
        </div>

        <div className="karta kookk">
          <span className="ikona">📂</span>
          <h3 className="kichk">Access and share important information, even offline</h3>
          <p className="izohh">View critical information, family plans, and documents at the push of a button, both online and offline - no worries if cell towers go out.</p>
          <img src={f}alt="Document management illustration" className="rasmm" />
        </div>

        <div className="karta yashl">
         
          <div className="pastt">
            <span className="ikona">🛡️</span>
            <h3 className="kichk">Know exactly what to do when an emergency strikes</h3>
            <p className="izohh">When disasters happen, harbor automatically activates your readiness plan and sends you personalized, on-demand info when it matters the most.</p>
            <img src={g} alt="Emergency strikes illustration" className="rasmm" />
          </div>
        </div>

      </div>
    </div>
        </>
    )
}

export default HeadreMain;
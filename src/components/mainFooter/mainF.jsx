import './mainF.css'
import h from '../../assets/h.svg'
import j from '../../assets/j.svg'
import k from '../../assets/k.svg'
import m from '../../assets/m.svg'

function MainFooter(){
    return(
    <>
       <div className="all">
      <section className="top">
        <h2 className="tit">We're ready, are you?</h2>
        <p className="sub">Here's what people are saying about harbor.</p>
        
        <div className="row">
          <div className="crd">
            <p className="msg">It's beautiful, easy to use, and is genuinely growing my confidence for crisis preparation.</p>
            <div className="str">⭐⭐⭐⭐⭐</div>
            <div className="usr">
              <img src={j}alt="Apple logo" className="ico" />
              <div>
                <div className="nam">Antonea</div>
                <div className="pos">iOS Beta Tester</div>
              </div>
            </div>
          </div>

          <div className="crd">
            <p className="msg">This app is something I've been hoping for for a while now. So I'm excited to be beta testing it.</p>
            <div className="str">⭐⭐⭐⭐⭐</div>
            <div className="usr">
              <img src={j} alt="Apple logo" className="ico" />
              <div>
                <div className="nam">Kathryn</div>
                <div className="pos">iOS Beta Tester</div>
              </div>
            </div>
          </div>

          <div className="crd">
            <p className="msg">It's a great app and I can't wait to use it more and see what all content you add.</p>
            <div className="str">⭐⭐⭐⭐⭐</div>
            <div className="usr">
              <img src={j} alt="Apple logo" className="ico" />
              <div>
                <div className="nam">Gabriel</div>
                <div className="pos">iOS Beta Tester</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="dot"><span></span></div>
      </section>

      <section className="bot">
        <div className="thm">
          <img src={h}alt="Yellow textured thumbs up illustration" className="img" />
        </div><br />
        <div className="cnt">
          <h2 className="tit white">Our mission is to<br />encourage readiness for all</h2>
          <p className="txt">
            It's our dream that one day, everyday readiness will be quite ordinary 
            - like brushing your teeth.<br />
            A little bit of effort with a big payoff.
          </p>
          <button className="btn">Learn more about us</button>
        </div>
      </section>
    </div>
       <img src={k}  className='yakka'/>

       <div className="um">

      <section className="ba">
        <div className="ic">
          <div className="ch">
            <h2 className="sa">Stay one step ahead with harbor</h2>
            <div className="tg">
              <button className="ap">
                <span className="ai"></span> App Store
              </button>
              <div className="go">
                <button className="pl">
                  Play Store
                </button>
                <span className="ku">Join the Waitlist</span>
              </div>
            </div>
          </div>
          <div className="on">
            <img src={m} alt="Harbor app showing hurricane readiness plan on a phone screen" className="te" />
          </div>
        </div>
      </section>

      <section className="jo">
        <h2 className="sa">Join harbor high fives</h2>
        <p className="mt">
          Up high. Down low. Tips on how to find your way through any disaster <br />
          in the best way possible: together. And be the first in line for Android.
        </p>
        
        <div className="fo">
          <input type="email" placeholder="Email address" className="ki" />
          <button className="yo">SIGN UP </button>
        </div>
        <p className="pi">Our commitment to protecting your Data Privacy.</p>
      </section>
    </div>


    <footer className="pastkism">
      <div className="asosblok">

        <div className="chapblok">
          <h1 className="logonomi">harbor</h1>
          <p className="huquqlar">© 2020 harbor. All rights reserved</p>
          
          <div className="linkblok">
            <div className="ustunlar">
              <a href="#">Privacy</a>
              <a href="#">Journal</a>
            </div>
            <div className="ustunlar">
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
            <div className="ustunlar">
              <a href="#">FAQ</a>
              <a href="#">Shop</a>
            </div>
          </div>
        </div>

        <div className="ongatraf">
          <nav className="menularim">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Risks</a>
          </nav>
        </div>
      </div>
    </footer>

    </>
    )
}

export default  MainFooter;
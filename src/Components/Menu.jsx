
import logos from '../Images/react.svg'
import closes from '../Images/xmark.svg'
// import dashboard from '../Images/dashboard.svg'
// import person from '../Images/person.svg'
// import arrow from '../Images/arrow.svg'
// import chart from '../Images/chart.svg'
// import circle from '../Images/circle.svg'
// import clipboard from '../Images/clipboard.svg'
// import gear from '../Images/gear.svg'
// import messages from '../Images/messages.svg'
// import plus from '../Images/plus.svg'
// import receipt from '../Images/receipt.svg'
// import xmark from '../Images/xmark.svg'

function Menu() {
    return (
      <>
       <aside>
        <div className='top'>
          <div className='logo'>
            <img src={logos} alt="logo" />
            <h2>EGA<span className='danger'>TOR</span></h2>
          </div>
          <div className='close' id='close-btn'>
            <span className='material-icons-sharp'>
              <img src={closes} alt="close-icon" />
            </span>
          </div>
          <div className='sidebar'>
            {/* <a href="#">
              <span className='material-icon-sharp'>
                  <img src={dashboard} alt="dashboards" />
              </span>
              <h3>Dashboard</h3>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={person} alt="personds" />
              </span>
              <h3>Customers</h3>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={arrow} alt="arrows" />
              </span>
              <h3>Orders</h3>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={chart} alt="charts" />
              </span>
              <h3>Anolytics</h3>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={circle} alt="circles" />
              </span>
              <h3>Massages</h3>
              <span className='massage-count'>26</span>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={clipboard} alt="clipboars" />
              </span>
              <h3>Products</h3>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={receipt} alt="receipt" />
              </span>
              <h3>Reports</h3>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={gear} alt="gears" />
              </span>
              <h3>Settings</h3>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={plus} alt="pluss" />
              </span>
              <h3>Add Products</h3>
            </a>
            <a href="#">
              <span className='material-icon-sharp'>
                  <img src={xmark} alt="xmark" />
              </span>
              <h3>Logout</h3>
            </a> */}

          </div>
        </div>
      </aside>
      </>
    );
  }

  export default Menu;
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = ()=>{
    return(
      <header className={classes.header}>
          <nav>
              <h2>Great Quotes</h2>
              <ul className={classes.headerList}>
                  <li><NavLink  activeClassName={classes.quote} to='/quotes' exact>All Quotes</NavLink></li>
                  <li><NavLink  activeClassName={classes.quote} to = '/new-quote'>Add a Quote</NavLink></li>
              </ul>
          </nav>
      </header>
    )
}

export default Header
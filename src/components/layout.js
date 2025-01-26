import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

import {Typography} from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./layout.css";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>
          <div
            className={styles.textCenter}
            style={{
              margin: `0 auto`,
              padding: `var(--space-4) var(--size-gutter)`,
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <StaticImage
              src="../images/logo.png"
              loading="eager"
              width={200}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ margin: `var(--space-3)`, marginLeft: "-40px" }}
            />
            <div>
              <Typography variant="h2" component="h2">
                MARS
              </Typography>
              <Typography variant="h4" component="h4">
                Amateur Radio Society
              </Typography>
            </div>
          </div>
          <Box sx={{ width: '100%'}}>
            <Tabs
              role="navigation"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label="About" value="/" to="/" component={Link}/>
              <Tab label="Events" value="/events" to="/events" component={Link} />
              <Tab label="Newsletters" value="/newsletters" to="/newsletters" component={Link}/>
              <Tab label="Organization" value="/organization" to="/organization" component={Link}/>
              <Tab label="Membership" value="/membership" to="/membership" component={Link}/>
            </Tabs>
          </Box>
          {children}
        </main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <b>© {new Date().getFullYear()} &middot; MARS Amateur Radio Society </b>
        </footer>
      </div>
    </>
  )
}

export default Layout

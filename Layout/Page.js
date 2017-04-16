import Head from 'next/head'
import PropTypes from 'prop-types'

const Page =  ({children}) => (
    <div>

        <style jsx global>{`
      html, body {
        height: 100%
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
      }
    `}</style>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
        </Head>
        {children}
    </div>
)

Page.propTypes = {
    children: PropTypes.node.isRequired
}

export default Page
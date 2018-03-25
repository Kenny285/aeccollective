import React from "react"
import SimpleNav from "../../plugins/gatsby-theme-bulma-layout/Simple/SimpleNav"

class mdInsetPage extends React.Component {
  render() {
    const {html} = this.props.data.markdownRemark

    return (
      <SimpleNav sitemetadata={this.props.data.site.siteMetadata} location={this.props.location}>
        <div className="container content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </SimpleNav>
    )
  }
}

export default mdInsetPage

export const pageQuery = graphql`
  query markdownTemplateBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
    site {
      siteMetadata {
        siteTitle
        siteDescr
        siteAuthor
        siteEmail
        siteTwitterUrl
        siteTwitterPretty
      }
    }
  }
`

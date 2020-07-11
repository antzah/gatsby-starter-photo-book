import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStateContext } from "../components/globalState.js"
import View from "../components/view.js"
import "../components/layout.css"
import 'typeface-open-sans/index.css'
import { exitFullScreen } from "../util/fullScreenHelpers.js"
import Footer from "../components/footer.js"
//import theme from "../theme.yaml"

class PaginatedGalleryTemplate extends React.Component {

    componentDidMount() {
        exitFullScreen()
    }

    render() {

        const highlight = (this.props.location && this.props.location.state ? this.props.location.state.highlight : -1)
        return (<>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Rautapatsaat Timo Väisänen</title>
                    <meta name="description" content="Kädentaitoja Kaarinasta - rautaisella ammattitaidolla! Rautapatsas on ainutlaatuinen lahja, pyydä tarjous!"/>
                    <meta name="keywords" content="rautapatsas, timo väisänen"/>
                </Helmet>
                <GlobalStateContext.Consumer>
                    {globalState => (
                        <>
                            <div style={{ padding: "24px", textAlign: "center" }}>
                                <h1 style={{marginBottom: "24px"}}>Rautapatsaat Timo Väisänen</h1>
                                <p style={{marginTop: 0, marginBottom: "12px"}}>Omaperäiset ja yksityiskohtaiset patsaat valmistuvat hitsaamalla. Romuraudaksi tuomittu aines saa uuden elämän taitavan hitsarin käsissä!</p>
                                <p style={{marginTop: 0, marginBottom: "24px"}}>Uniikki rautapatsas on erinomainen idea lahjaksi tai ihan vaikka olohuoneen koristeeksi!</p>
                            </div>
                            <View
                                globalState={globalState}
                                pageContext={this.props.pageContext}
                                highlight={highlight}
                            />

                            <Footer />
                        </>

                        
                    )}
                </GlobalStateContext.Consumer>
        </>)
    }
}

export default PaginatedGalleryTemplate
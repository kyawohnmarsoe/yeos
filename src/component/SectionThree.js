import React, { Component } from 'react'

export class SectionThree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            central:true,
            north:false,
            south:false,
            east:false,
            west:false,
        }
    }

    mapChange = (props) => {
        if (props === "central") {
            this.setState({
                central:true,
                north:false,
                south:false,
                east:false,
                west:false,
            })
        } else if (props === "north"){
            this.setState({
                central:false,
                north:true,
                south:false,
                east:false,
                west:false,
            })
        } else if (props === "south"){
            this.setState({
                central:false,
                north:false,
                south:true,
                east:false,
                west:false,
            })
        } else if (props === "east"){
            this.setState({
                central:false,
                north:false,
                south:false,
                east:true,
                west:false,
            })
        } else if (props === "west"){
            this.setState({
                central:false,
                north:false,
                south:false,
                east:false,
                west:true,
            })
        }

    
    }
    
    render() {
        let activeCentral = this.state.central ? "activeClass" : ""
        let activeNorth = this.state.north ? "activeClass" : ""
        let activeSouth = this.state.south ? "activeClass" : ""
        let activeEast = this.state.east ? "activeClass" : ""
        let activeWest = this.state.west ? "activeClass" : ""
        return (
            <div>
             <div className="container mt-5 shops">
                 <p className="text-center font-large">Enjoy your FREE SPC Rewards Booklet with any SPC Lubricant or servicing package purchased. <br /> Available at all SPC Service Stations, SPC SpeedyCare Auto Service Centres, participating independent <br /> workshops,  <a href="https://www.lazada.sg/shop/singapore-petroleum-company-limited" >Lazada</a>, <a href="https://shopee.sg/spclubricants" >Shopee</a> and <a href="https://www.qoo10.sg/shop/spclubricants" >Qoo10</a>.</p>
             </div>
            
             <div className="container my-4">
             { this.state.central && <img src="../img/maps/central.png" alt="" className="img-fluid map-img" /> }
             { this.state.north && <img src="../img/maps/north.png" alt="" className="img-fluid map-img" /> }
             { this.state.south && <img src="../img/maps/south.png" alt="" className="img-fluid map-img" /> }
             { this.state.east && <img src="../img/maps/east.png" alt="" className="img-fluid map-img" /> }
             { this.state.west && <img src="../img/maps/west.png" alt="" className="img-fluid map-img" /> }
            </div>

            <div className="container-md mt-4">
                <div className="row buttons-group">
                    <div className="col text-center ">
                         <button type="button" className={`${activeCentral} btn btn-outline-info`} onClick={()=>this.mapChange("central")}>Central</button>
                    </div>
                    <div className="col text-center">
                         <button type="button" className={`${activeNorth} btn btn-outline-info`} onClick={()=>this.mapChange("north")}>North</button>
                    </div>
                    <div className="col text-center">
                         <button type="button" className={`${activeSouth} btn btn-outline-info`} onClick={()=>this.mapChange("south")}>South</button>
                    </div>
                    <div className="col text-center">
                         <button type="button" className={`${activeEast} btn btn-outline-info`} onClick={()=>this.mapChange("east")}>East</button>
                    </div>
                    <div className="col text-center">
                         <button type="button" className={`${activeWest} btn btn-outline-info`} onClick={()=>this.mapChange("west")}>West</button>
                    </div>
                </div>
            </div>

            <div className="pt-3">
            { this.state.central &&
                <table className="table table-striped" id="central-locations">
                    <thead>
                        <tr>
                        <th scope="col" className="left-space">Station Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Tel. No.</th>
                        <th scope="col"><img src="../img/logos/choices.png" alt="" className="table-logo" /></th>
                        <th scope="col" className="right-space"><img src="../img/logos/speedycare.png" alt="" className="table-logo" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th className="left-space right-border">SPC Adam</th>
                        <td className="right-border">31 Adam Road, Singapore 289896</td>
                        <td className="right-border">6467-0862</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Balestier</th>
                        <td className="right-border">462 Balestier Road, Singapore 329837</td>
                        <td className="right-border">6251-2206</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Bukit Merah</th>
                        <td className="right-border">3800 Jalan Bt Merah, Singapore 159464</td>
                        <td className="right-border">6276-3351</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Bukit Timah</th>
                        <td className="right-border">331 Bukit Timah Road, Singapore 259717</td>
                        <td className="right-border">6734-1108</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Dunearn</th>
                        <td className="right-border">260 Dunearn Road, Singapore 299542</td>
                        <td className="right-border">6251-1006</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Killiney</th>
                        <td className="right-border">132 Killiney Road, Singapore 239562</td>
                        <td className="right-border">6737-4164</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Macpherson</th>
                        <td className="right-border">429 Macpherson Road, Singapore 368140</td>
                        <td className="right-border">6282-4116</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC River Valley</th>
                        <td className="right-border">2 Jervois Road, Singapore 248994</td>
                        <td className="right-border">6476-1484</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Thomson</th>
                        <td className="right-border">327 Thomson Road, Singapore 307673</td>
                        <td className="right-border">6259-5294</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                    </tbody>
                </table>
            }
            { this.state.north &&
                <table className="table table-striped" id="north-locations">
                    <thead>
                        <tr>
                        <th scope="col" className="left-space ">Station Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Tel. No.</th>
                        <th scope="col"><img src="../img/logos/choices.png" alt="" className="table-logo" /></th>
                        <th scope="col" className="right-space"><img src="../img/logos/speedycare.png" alt="" className="table-logo" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th className="left-space right-border">SPC Admiralty</th>
                        <td className="right-border">250 Admiralty Road, Singapore 739981</td>
                        <td className="right-border">6269-9953</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Ang Mo Kio Ave 1 (1 )</th>
                        <td className="right-border">793 Ang Mo Kio Ave 1, Singapore 569975</td>
                        <td className="right-border">6456-4968</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Ang Mo Kio Ave 1 (2 )</th>
                        <td className="right-border">1351 Ang Mo Kio Avenue 1, Singapore 569977</td>
                        <td className="right-border">6457-4417</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Ang Mo Kio Ave 5</th>
                        <td className="right-border">2761 Ang Mo Kio Avenue 5, Singapore 569866</td>
                        <td className="right-border">6554-7350</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Hougang</th>
                        <td className="right-border">120 Hougang Ave 2, Singapore 538858</td>
                        <td className="right-border">6282-9085</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Jalan Leban</th>
                        <td className="right-border">1 Jalan Leban, Singapore 577546</td>
                        <td className="right-border">6456-0967</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Sembawang</th>
                        <td className="right-border">588 Sembawang Road, Singapore 758448</td>
                        <td className="right-border">6754-1770</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Toa Payoh</th>
                        <td className="right-border">180 Toa Payoh Lor 6, Singapore 319381</td>
                        <td className="right-border">6253-1901</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Upper Serangoon</th>
                        <td className="right-border">849 Upper Serangoon Road, Singapore 534686</td>
                        <td className="right-border">6282-3583</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Upper Thomson</th>
                        <td className="right-border">76 Yio Chu Kang Road, Singapore 545570</td>
                        <td className="right-border">6353-3530</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Yio Chu Kang</th>
                        <td className="right-border">76 Yio Chu Kang Road, Singapore 545570</td>
                        <td className="right-border">6382-9976</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Yishun</th>
                        <td className="right-border">599 Yishun Ring Road, Singapore 768683</td>
                        <td className="right-border">6753-3567</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>
                    </tbody>
                </table>
            }

            { this.state.south &&
                <table className="table table-striped" id="south-locations">
                    <thead>
                        <tr>
                        <th scope="col" className="left-space ">Station Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Tel. No.</th>
                        <th scope="col"><img src="../img/logos/choices.png" alt="" className="table-logo" /></th>
                        <th scope="col" className="right-space"><img src="../img/logos/speedycare.png" alt="" className="table-logo" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th className="left-space right-border">SPC Commonwealth</th>
                        <td className="right-border">490 Commonwealth Ave, Singapore 149736</td>
                        <td className="right-border">6777-8413</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Havelock</th>
                        <td className="right-border">397 Havelock Road, Singapore 169630</td>
                        <td className="right-border">6734-1478</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Bukit Panjang</th>
                        <td className="right-border">41 Bukit Panjang Ring Road, Singapore 679945</td>
                        <td className="right-border">6766-3936</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Pasir Panjang</th>
                        <td className="right-border">158 Pasir Panjang Road, Singapore 118555</td>
                        <td className="right-border">6273-3400</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Telok Blangah</th>
                        <td className="right-border">616 Telok Blangah Road, Singapore 109027</td>
                        <td className="right-border">6270-5693</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Queensway</th>
                        <td className="right-border">264 Queensway, Singapore 149062</td>
                        <td className="right-border">6475-8726</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                    </tbody>
                </table>
            }

            { this.state.east &&
                <table className="table table-striped" id="east-locations">
                    <thead>
                        <tr>
                        <th scope="col" className="left-space ">Station Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Tel. No.</th>
                        <th scope="col"><img src="../img/logos/choices.png" alt="" className="table-logo" /></th>
                        <th scope="col" className="right-space"><img src="../img/logos/speedycare.png" alt="" className="table-logo" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th className="left-space right-border">SPC Bedok</th>
                        <td className="right-border">101 Bedok North Road, Singapore 469678</td>
                        <td className="right-border">6269-9953</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Changi <span className="font-small">*Closed for upgrading</span></th>
                        <td className="right-border">337 Changi Road, Singapore 419810</td>
                        <td className="right-border">6741-0869</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Mountbatten</th>
                        <td className="right-border">710 Mountbatten Road, Singapore 437734</td>
                        <td className="right-border">6447-3256</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Pasir Ris</th>
                        <td className="right-border">11 Pasir Ris Drive 4, Singapore 519456</td>
                        <td className="right-border">6583-7301</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Punggol</th>
                        <td className="right-border">100 Punggol Central, Singapore 828839</td>
                        <td className="right-border">6489-8368</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Sengkang</th>
                        <td className="right-border">91 Sengkang East Way, Singapore 544885</td>
                        <td className="right-border">6388-7572</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Sumang</th>
                        <td className="right-border">10 Sumang Link, Singapore 828805</td>
                        <td className="right-border">6513-4655</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Tampines</th>
                        <td className="right-border">10 Tampines Avenue 4, Singapore 529679</td>
                        <td className="right-border">6443-3910</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Tanjong Katong</th>
                        <td className="right-border">1 Swanage Road/Tanjong Katong, Singapore 437168</td>
                        <td className="right-border">6447-2729</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                        <tr>
                        <th className="left-space right-border">SPC Upper East Coast</th>
                        <td className="right-border">157 Upper East Coast Road, Singapore 455253</td>
                        <td className="right-border">6241-3914</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>
                    </tbody>
                </table>
            }

            { this.state.west &&
                <table className="table table-striped" id="west-locations">
                    <thead>
                        <tr>
                        <th scope="col" className="left-space ">Station Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Tel. No.</th>
                        <th scope="col"><img src="../img/logos/choices.png" alt="" className="table-logo" /></th>
                        <th scope="col" className="right-space"><img src="../img/logos/speedycare.png" alt="" className="table-logo" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th className="left-space right-border">SPC Jalan Buroh</th>
                        <td className="right-border">33 Jalan Buroh, Singapore 619487</td>
                        <td className="right-border">6268-8669</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"><img src="../img/check.png" alt="" className="table-check" /></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Jurong East</th>
                        <td className="right-border">91 Jurong East Ave 1, Singapore 609786</td>
                        <td className="right-border">6560-9786</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>
                        <tr>
                        <th className="left-space right-border">SPC Bukit Batok</th>
                        <td className="right-border">50 Bukit Batok East Avenue 3 Singapore 659879</td>
                        <td className="right-border">6513-4733</td>
                        <td className="right-border"><img src="../img/check.png" alt="" className="table-check" /></td>
                        <td className="right-space"></td>
                        </tr>

                       


                    </tbody>
                </table>
            }
            </div>

        </div>
        )
    }
}

export default SectionThree

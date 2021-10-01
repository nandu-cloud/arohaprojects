import React, { Component } from 'react';
import { Grid, Typography,Card  } from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";


import ArrowRightIcon from '@material-ui/icons/ArrowRight';

//-----------------------Icons-----------------------
import cardImg1 from '../../images/additionalServices/cardImg1.jpg'
import cardImg2 from '../../images/additionalServices/cardImg2.jpg'
import cardImg3 from '../../images/additionalServices/cardImg3.jpg'
import icon1 from '../../images/dropDown/icon1.png'



const AdditionalServices = ({history,setOpen,open}) => {

    return ( 
        <>
        <Grid container  className= "additionalServicesContainer" style={{marginTop:"5px"}}>
            <Grid item xs={12} md={12}>
                <Typography className="topText">
                    Aleenta Additional Services
                </Typography>
            </Grid>  
            <Grid container style={{backgroundColor:"#fbf2de"}}>
                <Grid item xs={12} md={6}>               
                    <Typography className="additionalDrop_content">
                        Come have a practical experience of Silence at Aleenta Wellbeing!
                    </Typography>
                </Grid>

{/* ----------------------------card-1----------------------------------- */}
                <Grid item xs={12} md={12}>
                    <Grid container align="center">
                        <Grid item xs={12} md={4} className="articalCardGrid">
                            <Link to="/additionMeditation" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"80%"}} 
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height:"80%"}} >
                                        <img src={cardImg1}  style={{width:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles">
                                            MEDITATION
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>

{/* ----------------------------card-2----------------------------------- */}

                        <Grid item xs={12} md={4} className="articalCardGrid">
                            <Link to="/additionArtTherapy" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"80%"}}
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height:"80%"}} >
                                        <img src={cardImg2}  style={{width:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles">
                                            ART THERAPY
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>
{/* ----------------------------card-3----------------------------------- */}

                        <Grid item xs={12} md={4} className="articalCardGrid">
                            <Link to="/additionSelfHealing" style={{textDecoration:"none"}}>
                                <Card className="articalCard" style={{width:"90%",height:"80%"}} 
                                    onClick={()=>
                                        setOpen(true)}
                                >
                                    <Card container className="articalCard1"  style={{height:"80%"}} >
                                        <img src={cardImg3}  style={{width:"100%"}}/>
                                    </Card>
                                    <Card container  style={{height:"20%"}}>
                                        <Typography className="additionalDrop_articles">
                                            SELF-HEALING TECHNIQUES
                                        </Typography>
                                    </Card>
                                </Card>
                            </Link>
                        </Grid>

                    </Grid>
                </Grid>
                
            </Grid>         
        </Grid>
        </>
     );
}
 
export default AdditionalServices;
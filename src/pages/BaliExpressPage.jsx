import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import EmptyTemplate from '../assets/Baliexpress/EmptyTemplate.png';
import FilledTemplate from '../assets/Baliexpress/FilledTemplate.png';
import ComparePage from '../assets/Baliexpress/ComparePage.png';
import BuildForm from '../assets/Baliexpress/BuildForm.png';
import BaliExpressCarousel from '../Components/BaliExpressCarousel';
import HomePage from '../assets/Baliexpress/HomePage.png';
import ProductPage from '../assets/Baliexpress/ProductPage.png';
import ProductReview from '../assets/Baliexpress/ProductReview.png';
import Cart from '../assets/Baliexpress/Cart.png';
import AddProduct from '../assets/Baliexpress/AddProduct.png';
import CreateSale from '../assets/Baliexpress/CreateSale.png';
import SaleStats from '../assets/Baliexpress/SaleStats.png';
import ProductData from '../assets/Baliexpress/ProductData.png';
import CustomerOrders from '../assets/Baliexpress/CustomerOrders.png';

const useStyles = makeStyles(() => ({
    colorBreakOff: {
        backgroundColor: 'rgb(235, 235, 235)',
        margin: '1em 0',
        padding: '1em 0',
    },
    headerContainer: {
        marginBottom: '1em',
    }
}));

const userItems = [
    {
        name: 'homepage',
        image: HomePage,
    },
    {
        name: 'ProductPage',
        image: ProductPage,
    },
    {
        name: 'ProductReview',
        image: ProductReview,
    },
    {
        name: 'Cart',
        image: Cart,
    },
]

const adminItems = [    
    {
        name: 'AddProduct',
        image: AddProduct,
    },
    {
        name: 'CreateSale',
        image: CreateSale,
    },
    {
        name: 'SaleStats',
        image: SaleStats,
    },
    {
        name: 'ProductData',
        image: ProductData,
    },
    {
        name: 'CustomerOrders',
        image: CustomerOrders,
    },
]



const BaliExpressPage = () => {
    
    const history = useHistory();
    const classes = useStyles();
    
    const redirectBack = () => {
        history.push('/Personal-website');
    }
    
    
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h1">BaliExpress</Typography>
            </Grid>
            <Grid item className={classes.headerContainer} xs={9}>
                <Typography variant="h6">
                    Spec: To develop an e-commerce website, that includes a recommender system that helps a user/customer choose which product to purchase. Developed in a group of 5.
                </Typography>
                <Typography>
                    Languages used: React, Python, PostgreSQL.
                </Typography>
                <Typography>
                    Github Link: <a href="https://github.com/Vaatri/BaliExpress-ECommerce">https://github.com/Vaatri/BaliExpress-ECommerce</a>
                </Typography>
            </Grid>
            <Grid container item direction="row" spacing={1} xs={8} justify="center">
                <Grid container item direction="column" xs={5}>
                    <Grid item>
                        <Typography variant="h5">User</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>As a user, they should have all the functionality that a normal user at an e-commerce website has. That is:</Typography>
                        <ul>
                            <li>View/Purchase Items</li>
                            <li>Login/Register</li>
                            <li>Setting Customer Details</li>
                            <li>Viewing previous orders</li>
                            <li>Viewing/writing Product reviews</li>
                        </ul>
                    </Grid>
                    <Grid item>
                        <Typography>Registered users are also able to save their custom built PCs.</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <BaliExpressCarousel items={userItems}/>
                </Grid>
            </Grid>
            <Grid container item direction="row" spacing={1} xs={12} justify="center" className={classes.colorBreakOff}>
                <Grid container item direction="column" xs={7}>
                    <Grid item>
                        <Typography variant="h5">Recommender System</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Our recommendation system caters for 3 different types of users. These are as follows:
                        </Typography>
                        <ul>
                            <li>
                                The first being a customer that has done the research, and knows what they want.
                            </li>
                            <li>
                                The second is a customer that understands the components needed to build a computer, but doesn't keep up with the trends and won't know which product is best for their budget and usage..
                            </li>
                            <li>
                                The last customer is someone who doesn't know anything about computers, but would like to purchase a custom built pc.
                            </li>
                        </ul>
                        <Typography>
                            Each of these users interact with the system the same way, via a form, and a page where they are able to 
                            select and compare different parts. The difference is, is that the first user is able just to use an empty template,
                            whereas the other can opt for a custom PC to be built for them, and customize where they see fit.
                        </Typography>
                        <Typography>
                            These Custom PC's are determined by an algorithm that chooses the best parts within your budget that is also the best 'bang for your buck'.
                            The comparison system attaches a performance values to selected products that allows users to visually compare performance over different categories.
                        </Typography>
                    </Grid>
                </Grid>
                    <Grid container item direction="row" xs={11} spacing={1}>
                        <Grid item xs={3}>
                            <img src={BuildForm} alt="BuildForm" className="image" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={EmptyTemplate} alt="EmptyTemplate" className="image" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={FilledTemplate} alt="FilledTemplate" className="image" />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={ComparePage} alt="ComparePage" className="image" />
                        </Grid>
                    </Grid>
            </Grid>
            <Grid container item direction="row" spacing={1} xs={8} justify="center">
                <Grid container item direction="row" xs={5}>
                    <Grid item>
                        <Typography variant="h5">Admin</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>An Admin has overall control of the Website. Since there was no other way for products and other data, the admin account acts as a central point to do all of the following:</Typography>
                        <ul>
                            <li>Adding products</li>
                            <li>Viewing All Products and sale statistics</li>
                            <li>Viewing All Customer Orders</li>
                            <li>Managing Sales and Viewing Sales Data</li>
                            <li>Viewing and removing reported reviews</li>
                        </ul>
                        <Typography>Viewing sale statistics for sales, and products include a graph from CanvasJS. It is interactable where you are able to zoom, scroll, and mouseover certain points.</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <BaliExpressCarousel items={adminItems}/>
                </Grid>
            </Grid>
            <Grid item>
                <Button onClick={redirectBack} variant="contained">Back</Button>
            </Grid>
        </Grid>
    )
    
}

export default BaliExpressPage;
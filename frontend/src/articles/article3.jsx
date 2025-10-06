import React from 'react';
import Navbar from '../navbar.jsx';
export default function Articles() {
    return (
        <>
        <Navbar />
        <section>
            <div>
                <h1>Articles</h1>
            </div>
        </section>
        <article>
            <h2> <a href="https://www.donorschoose.org/">DonorsChoose</a></h2>
            <p>In contrast to the AAE grant, DonorsChoose uses fundraisers as their primary way of using money to help teachers. DonorsChoose, in my opinion, is easily the most accessible option for teachers because it allows any teacher to create a fundraiser. An interesting fact about it is that it also uses geolocation in order to find fundraisers created by teachers near the IP address of the site’s visitor, so it makes sure that more immediate change is happening in the teacher’s area.</p>
            <p>DonorsChoose’s fundraisers work very similarly to sites such as GoFundMe. Teachers can create fundraisers in order to solve an issue for their class or school, and even has built-in buttons to connect to social media platforms. The site has received the highest ratings on Better Business Bureau and Charity Navigator, showing that DonorsChoose has some form of reliability.</p>
        </article>
        </>
    );}
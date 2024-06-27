---
title: "OpenRTB"
coverImage: "/glossary/OpenRTB.jpeg"
ogImage:
  url: "/glossary/OPenRTB.jpeg"
---
## Real-Time Bidding (RTB)

Many of the video and display ads you see online are the result of companies using real-time bidding (RTB) to display their ads to you. This process happens in less than a second and is a fundamental component of programmatic advertising, an industry projected to exceed $200 billion in the US soon.

### What is OpenRTB?

OpenRTB provides the standards and protocol for RTB transactions. These standards offer a consistent and standardized way to convey crucial information about an ad impression. For instance, through OpenRTB, marketers can access publisher information, ad creative sizes and standards, and other essential details needed before placing a bid.
The main goal of OpenRTB is to foster growth in RTB marketplaces by offering an open industry standard for interoperability and communication between buyers and sellers of digital advertising. It was established in 2010 by a coalition of demand-side platforms (DSPs) and supply-side platforms (SSPs) who created the open-source protocol for OpenRTB.

#### Supply-Side Platform (SSP) vs. Demand-Side Platform (DSP)

Publishers use SSPs to package and sell their programmatic ad inventory, while marketers use DSPs to purchase this inventory. DSP platforms assist marketers in targeting ads, managing ad creatives, and reporting on delivery.
SSPs and DSPs communicate through OpenRTB, providing specification details via bid requests and responses. The SSP issues a bid request, and the DSP responds with a bid (the bid response). Both request and response are conveyed in JSON (Javascript Object Notation), a lightweight format for data transmission. Using JSON, bid requests and responses contain attributes, objects, and necessary values for buying and selling ad impressions.

##### First-Price Auction vs. Second-Price Auction

In a first-price auction, the publisher takes the highest bid, and that's the price the marketer pays. In a second-price auction, the publisher also takes the highest bid but reduces it to the second-highest bid or a penny above it. This is the amount the marketer pays.
For example, in a second-price auction with one bid at $7 and another at $8, the marketer who placed the $8 bid will win but will only pay $7.01.

##### The Post-Auction Process

After winning an SSP auction, the next steps are as follows:

1. The SSP takes the ad information from the marketer and sends it to the publisher.
2. The SSP usually adds extra tracking to independently monitor events related to the ad.
3. Once the ad has been served on the publisher’s property and the tracking beacons confirm its display, the transaction is complete.
4. Both the SSP and DSP record the transaction and the final price.

#### RTB Capabilities

RTB, through demand-side platforms, allows for automatic real-time bidding on ad impressions. The key benefits of RTB include:
• Audience Segmentation and Optimization: Publishers and marketers can segment and optimize audiences in real-time.
• Continuous Campaign Optimization: Marketers can use data such as page content, time of day, ad placement, and visitor data to continuously optimize their campaigns.
• Global Inventory Access: Marketers can quickly access global inventory to reach large market segments across multiple countries, serving ads to individual high-value users without direct contact with media sellers and their platforms.
• Ad Personalization: RTB’s data and scalability enable marketers to serve personalized ads, increasing conversion rates.

RTB is an essential tool in modern marketing, and OpenRTB enhances it by improving the consistency and efficiency of the bidding process.

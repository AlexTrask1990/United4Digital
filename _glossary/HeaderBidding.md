---
title: "Header Bidding"
coverImage: "/glossary/Header Bidding.jpeg"
ogImage:
  url: "/glossaryHeader Bidding.jpeg"
---

## Header Bidding
### Header Bidding: Maximizing Ad Revenue in Real-Time
##### What is Header Bidding?
Header bidding, also known as advanced bidding or pre-bidding, is a programmatic advertising approach where publishers auction their ad inventory to multiple ad exchanges simultaneously. This method ensures that publishers get the highest possible price for their ad spaces by allowing multiple ad exchanges to bid in real-time.

For instance, consider a sports website that needs to sell its ad space. Traditionally, this would involve manually selling premium spots to a few ad networks. With header bidding, the website can auction its ad space to multiple networks, increasing competition and, consequently, revenue.

##### Benefits of Header Bidding

Header bidding offers significant advantages for publishers:
Increased Revenue: By auctioning ad space to multiple networks, publishers can ensure they get the highest bid, maximizing their revenue.

Optimized Ad Space Utilization: More ad space is sold as networks compete in the auction, improving the overall yield.

Enhanced Advertiser Access: Advertisers gain first access to impression data, allowing them to optimize their campaigns. This also means more advertisers can bid on premium inventory, which might have been limited to select advertisers in traditional methods.

##### The Waterfall Programmatic Era

Before header bidding, the waterfall method, also known as daisy chaining, was prevalent. In this method, ad inventory was offered sequentially to ad exchanges based on their historic yield. If the first exchange did not meet the floor price, the offer would move to the next, and so on.
#### While straightforward, the waterfall method had inefficiencies:

Missed Opportunities: High-paying ad exchanges lower in the sequence might be overlooked.

Latency Issues: Sequential processing caused delays, slowing down webpage performance.

Header bidding addresses these issues by enabling a simultaneous real-time auction, maximizing both yield and revenue.

#### Header Bidding vs. Real-Time Bidding (RTB)
Real-time bidding (RTB) is the process of buying and selling ads through auctions that occur as webpages or apps load. Header bidding is a specific method within RTB that involves multiple ad exchanges bidding simultaneously.

#### How Does Header Bidding Work?
When a user opens a webpage, an auction is triggered by a code called a wrapper in the website's header. This wrapper contacts various ad exchanges and demand partners to bid within milliseconds. These partners conduct their own internal auctions to submit their highest bids. The winning bid then connects the publisher's and advertiser's ad servers, displaying the ad to the user.

##### In-App Bidding
In-app bidding is the equivalent of header bidding for mobile applications. It allows for the programmatic buying and selling of ad space within apps through real-time auctions.

##### Header Bidding vs. Open Bidding
Open bidding, like Google’s version, is a server-side auction process, unlike the client-side process in traditional header bidding. Open bidding simplifies implementation as it doesn't require complex code on the publisher's side and creates a unified auction involving ad exchanges, supply-side platforms (SSPs), and demand partners.

##### Challenges and Considerations

While header bidding is a leading solution for maximizing ad revenue, it is not without challenges:
Complex Implementation: Setting up header bidding requires sophisticated technical knowledge.

Latency Issues: Although improved from the waterfall method, some delays in webpage loading times, especially on mobile devices, still occur.

##### Key Takeaways

Maximized Revenue: Publishers can significantly increase their revenue potential by auctioning ad space to multiple ad exchanges.

Real-Time Auctions: Ads are bought and sold as webpages and apps load, optimizing the ad buying process.

Versatility: Header bidding is used for websites, while in-app bidding applies the same concept within mobile applications.

In summary, header bidding is a powerful tool in programmatic advertising, enabling publishers to maximize their ad revenue through real-time, competitive auctions.

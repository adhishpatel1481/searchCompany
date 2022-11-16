const Ads=require('../Model/ads')
module.exports.addAds=async (req, res) => {
    await Ads.insertMany([
      {
        companyId: "6372899602c363364abb24d0",
        primaryText:
          "The world’s leading CRM is ready to help you simplify the business part of your small business.",
        headline: "Salesforce for Small Business",
        description: "",
        CTA: "Sign Up",
        imageUrl:
          "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing",
      },
      {
        companyId: "6372899602c363364abb24ce",
        primaryText: "We like where you’re going with this.",
        headline: "Relaxed Fit Men's Jeans",
        description: "",
        CTA: "Shop Now",
        imageUrl:
          "https://drive.google.com/file/d/17kQiqGnkLEZZmnzLlWG7ZIlN6XbwAVfb/view?usp=sharing",
      },
      {
        companyId: "6372899602c363364abb24d3",
        primaryText:
          "Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
        headline: "Made With Recycled Plastic",
        description: "Shop Back to School",
        CTA: "Shop Now",
        imageUrl:
          "https://drive.google.com/open?id=17nXWIFT-63JLfEvBEuQiyDYmA2dckCmq&authuser=rohit103%40gmail.com&usp=drive_fs",
      },
      {
        companyId: "6372899602c363364abb24d4",
        primaryText:
          "The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.",
        headline:
          "Norm Macdonald's Nothing Special gives one last dose of the late comic",
        description: "",
        CTA: "Learn More",
        imageUrl:
          "https://drive.google.com/open?id=17nXWIFT-63JLfEvBEuQiyDYmA2dckCmq&authuser=rohit103%40gmail.com&usp=drive_fs",
      },
      {
        companyId: "6372899602c363364abb24d6",
        primaryText:
          "Visit Valentino.com, discover the new products and shop now!",
        headline: "Valentino Hexagonal Metal Frame With Crystal Studs",
        description: "",
        CTA: "Shop Now",
        imageUrl:
          "https://drive.google.com/file/d/17sz2UuPNcoHXz-U27EYcwmhkI1ZQUmPZ/view?usp=sharing",
      },
      {
        companyId: "6372899602c363364abb24d8",
        primaryText:
          "Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.",
        headline: "Cooler Summers Start Here",
        description: "Shop Purple products, designed to help you sleep cool.",
        CTA: "Shop Now",
        imageUrl:
          "https://drive.google.com/file/d/17vrlQMchymHqlN35p4os23jYqQjFiUNq/view?usp=sharing",
      },
      {
        companyId: "6372899602c363364abb24d7",
        primaryText:
          '"Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns."',
        headline: "Personalized skincare for dark spots, acne, and more.",
        description:
          "Personalized skincare for dark spots, acne, and more. Results may vary.",
        CTA: "Order Now",
        imageUrl:
          "https://drive.google.com/file/d/17vzdu8jSulXgzk9rkJaHP7W1940pQaAV/view?usp=sharing",
      },
    ]);
    res.send("inserted");
  }

  module.exports.searchAds=async (req, res) => {
    const advertisements = await Ads.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "Advertiser",
        },
      },
      {
        $match: {
          $or: [
            { "Advertiser.name": { $regex: req.params.key } },
            { primaryText: { $regex: req.params.key } },
            { headline: { $regex: req.params.key } },
            { description: { $regex: req.params.key } },
          ],
        },
      },
    ]);
    res.json(advertisements);
  }
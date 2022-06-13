const collectionInfo = {
    name: "Super Ape University",
    title: "{name}",
    date: "13.06.2022",
    socialMedia: {
        discord: "https://discord.com/invite/bakedberserk",
        twitter: "https://twitter.com/bakedberserk",
    },
    medias: {
        preview: "3LYI7ICl_o.gif",
        favicon: "logo.jpg",
    },
    background: {
        type: "image",
        image: "apeventura.gif",
        video: "",
        color: "#4E4E6D",
    }
}
const mintInfo = {
    price: 1.5,
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
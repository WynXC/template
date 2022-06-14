const collectionInfo = {
    name: "Super Ape University",
    title: "{name}",
    date: "14.06.2022",
    socialMedia: {
        discord: "https://discord.com/",
        twitter: "https://twitter.com/",
    },
    medias: {
        preview: "1.gif",
        favicon: "logo.png",
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
    toFixed: 1.5,
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
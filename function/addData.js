const { createClient } = require("@astrajs/collections")

const collection = 'tiktokposts'

exports.handler = async function (event, context, callback) {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
      });

      const posts = astraClient
            .namespace(process.env.ASTRA_DB_KEYSPACE)
            .collection(collection)

    const data = [
        {
            id: 0,
            name: "Abela",
            username: "holo",
            avatar: "https://avatars.dicebear.com/api/avataaars/holo.svg",
            is_followed: true,
            video: "https://i.imgur.com/FTBP02Y.mp4",
            caption: "Ducks <3",
            likes: 21,
            comments: 3,
            timestamp: "2020-10-10T09:04:35.020Z",
            button_visible: true,
        },
        {
            id: 1,
            name: "Jorge",
            username: "jCool",
            avatar: "https://avatars.dicebear.com/api/avataaars/jcool.svg",
            is_followed: true,
            video: "https://i.imgur.com/1A7AKoF.mp4",
            caption: "Caption caption caption",
            likes: 15,
            comments: 1,
            timestamp: "2019-12-10T09:08:53.020Z",
            button_visible: true,
        },
        {
            id: 2,
            name: "Matilda",
            username: "matila_magica",
            avatar: "https://avatars.dicebear.com/api/avataaars/matilda_magica.svg",
            is_followed: false,
            video: "https://i.imgur.com/al6MLay.mp4",
            caption: "Caption caption 1 2 3",
            likes: 38,
            comments: 7,
            timestamp: "2019-03-10T09:08:31.020Z",
            button_visible: true,
        },
        {
            id: 3,
            name: "Terrence",
            username: "terry",
            avatar: "https://avatars.dicebear.com/api/avataaars/terry.svg",
            is_followed: false,
            video: "https://i.imgur.com/IigY4Hm.mp4",
            caption: "Relleno relleno relleno",
            likes: 8,
            comments: 1,
            timestamp: "2020-05-10T09:10:31.020Z",
            button_visible: true,
        },
        {
            id: 4,
            name: "Mik",
            username: "mikk",
            avatar: "https://avatars.dicebear.com/api/avataaars/mikk.svg",
            is_followed: true,
            video: "https://i.imgur.com/H9UX0Jm.mp4",
            caption: "Más y más relleno",
            likes: 104,
            comments: 23,
            timestamp: "2021-08-10T09:09:31.020Z",
            button_visible: true,
        }
    ]

      
    try {
        for(let i=0; i < data.length; i++) {
            await posts.create(data[i].id, data[i])
        }
        
        return {
            statusCode: 200
        }
      }  catch(e) {
          console.log(e)
          return {
              statusCode: 500,
              body: JSON.stringify(e)
          }
      }
    
}


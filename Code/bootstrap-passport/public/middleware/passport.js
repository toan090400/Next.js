import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import Google from "../../models/googleModel";
import Github from "../../models/githubModel";
// google
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/google/callback",
    },
    async (accessToken, refreshToken, profile, callback) => {
      const googleId = profile._json.sub;
      const displayname = profile._json.name;
      const givenName = profile._json.given_name;
      const familyName = profile._json.family_name;
      const image = profile._json.picture;
      const email = profile._json.email;
      const newGoogle = await {
        googleId,
        displayname,
        givenName,
        familyName,
        image,
        email,
      };

      try {
        const user = await Google.findOne({ googleId: profile.id });
        if (user) {
          user.displayname = displayname;
          user.givenName = givenName;
          user.familyName = familyName;
          user.image = image;
          user.email = email;
          await user.save();
          callback(null, user);
        } else {
          const newUser = await Google.create(newGoogle);
          callback(null, newUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);
// github
passport.use(
  "github",
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/github/callback",
    },
    async (accessToken, refreshToken, profile, callback) => {
      const githubId = profile.id;
      const displayname = profile.displayName;
      const nodeId = profile.nodeId;
      const username = profile.username;
      const profileUrl = profile.profileUrl;
      const photos = profile.photos[0].value;
      const newGithub = await {
        githubId,
        displayname,
        nodeId,
        username,
        profileUrl,
        photos,
      };

      try {
        const user = await Github.findOne({ githubId: profile.id });
        if (user) {
          user.displayname = displayname;
          user.nodeId = nodeId;
          user.username = username;
          user.profileUrl = profileUrl;
          user.photos = photos;
          await user.save();
          callback(null, user);
        } else {
          const newUser = await Github.create(newGithub);
          callback(null, newUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

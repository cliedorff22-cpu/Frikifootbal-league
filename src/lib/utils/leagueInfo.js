/*   STEP 1   */
export const leagueID = "138937629622120448"; // your league ID
export const leagueName = "Friki_Football"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome back, managers! The Friki Football Fantasy League is officially entering its 4th season, and it's time to settle old scores, create new rivalries, and chase championship glory.
Every draft pick matters. Every waiver claim counts. Every Sunday brings another chance to prove who's the smartest manager in the league. Whether you're defending your reputation, seeking revenge[...]
Good luck to everyone this season. May your stars stay healthy, your sleepers break out, and your opponents forget to set their lineups. Trash talk is encouraged, excuses are not.
Welcome to Year 4. Let the battle for Friki Football supremacy begin!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [];

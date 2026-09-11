# Cloud theme

The site uses real cloud photographs behind self-hosted IBM Plex Mono text. The homepage stays open to the background; interior pages use a solid rounded reading surface. The existing light/dark preference controls text and surfaces independently of the clock. The portrait asset is retained but is not displayed on the homepage.

`assets/js/sky.js` selects the image using the visitor's local clock, checks for changes each minute and when returning to the tab, and crossfades only after the next image loads. These are fixed time windows, not location-based sunrise or sunset calculations. JavaScript-disabled visits use the midday image and the complete name. Reduced-motion preferences show the complete name immediately and disable crossfades.

| Local hours              | Image     | Preview                                           |
| ------------------------ | --------- | ------------------------------------------------- |
| 00:00–04:59, 21:00–23:59 | Night     | [night](http://127.0.0.1:4000/?sky=night)         |
| 05:00–07:59              | Dawn      | [dawn](http://127.0.0.1:4000/?sky=dawn)           |
| 08:00–10:59              | Morning   | [morning](http://127.0.0.1:4000/?sky=morning)     |
| 11:00–14:59              | Midday    | [midday](http://127.0.0.1:4000/?sky=midday)       |
| 15:00–17:59              | Afternoon | [afternoon](http://127.0.0.1:4000/?sky=afternoon) |
| 18:00–20:59              | Sunset    | [sunset](http://127.0.0.1:4000/?sky=sunset)       |

The optional `sky` query parameter previews a named period on any route; it does not save a preference. Remove it to follow the clock. `_sass/_sky.scss` supplies the shared theme and initial image mappings. `purgecss.config.js` keeps the states applied by JavaScript in production CSS.

## Image sources

All six images are real photographs downloaded from Unsplash and compressed locally to WebP. The labels describe their role in the design, not verified capture times. Reuse is under the [Unsplash License](https://unsplash.com/license), which permits downloading, modification, and commercial use; attribution is appreciated.

| Local file       | Photographer     | Source photo                                                                                              |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| `dawn.webp`      | Jeong goun       | [My sky](https://unsplash.com/photos/photo-of-pink-and-blue-clouds-QOsrVnj5tz0)                           |
| `morning.webp`   | Milad Fakurian   | [Minimal Nature](https://unsplash.com/photos/white-clouds-and-blue-sky-XuN7vStr9Sg)                       |
| `midday.webp`    | CHUTTERSNAP      | [Clouds during daytime](https://unsplash.com/photos/clouds-during-daytime-M2-_GRvWWg0)                    |
| `afternoon.webp` | Rebecca Campbell | [Above the clouds](https://unsplash.com/photos/white-clouds-and-blue-sky-5nN9NX6dJxc)                     |
| `sunset.webp`    | Ruby Lalor       | [Pink clouds against a dark sky](https://unsplash.com/photos/pink-clouds-against-a-dark-sky--_U9Yqi8q5s)  |
| `night.webp`     | Devon MacKay     | [Stars and Clouds](https://unsplash.com/photos/the-night-sky-is-filled-with-stars-and-clouds-zG4l0ZydhRk) |

Plicara's light and dark marks are unmodified copies of `logo/mark-colour.svg` and `logo/mark-colour-dark.svg` from [plicara/plicara-brand](https://github.com/plicara/plicara-brand). The homepage links to [plicara.ai](https://plicara.ai/). The project page keeps its existing `/projects/foothills_labs/` URL so existing links continue to work, while its title, content, image, and organization links use Plicara Labs.

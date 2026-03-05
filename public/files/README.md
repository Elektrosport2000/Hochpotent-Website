# Downloads für HOCHPOTENT Website

Dateien für das Presskit hier in diesen Ordner (`public/files/`) ablegen.

Diese Dateien sind **nicht öffentlich verlinkt** - sie werden nur auf direkte Anfrage per E-Mail (business@hochpotent.com) herausgegeben.

---

## Erwartete Dateien

| Dateiname | Inhalt |
|---|---|
| `tech-rider.pdf` | Technischer Rider (Anforderungen an Technik/Bühne) |
| `press-photos.zip` | Pressefotos-Paket (hochauflösend, mind. 300 dpi) |
| `epk-hochpotent.zip` | Electronic Press Kit (EPK) - komplettes Paket |

---

## Presskit-Anfrage

Der "Presskit anfragen"-Button auf der Website öffnet eine vorausgefüllte E-Mail an `business@hochpotent.com`.

Den Button-Text und die E-Mail-Adresse im Link kannst du in **`src/data/buttons.ts`** anpassen:

```ts
presskit: {
  text: "Presskit anfragen",
  href: "mailto:business@hochpotent.com?subject=Presskit%20Anfrage&body=...",
},
```

<p align="center">
<img src="https://omergulcicek.com/img/turkce-dokuman.png" alt="Türkçe Doküman" height="100">
</p>

<h1 align="center">Türkçe Doküman</h1>

<h3><a href="https://turkcedokuman.com/">turkcedokuman.com</a></h3>

<a href="https://github.com/omergulcicek/turkcedokuman/blob/master/dokumanlar.json">dokuman.json</a>'a pull request yapınız.

Eklenecek data'da `link` olması zorunludur. `ad` ve `aciklama` opsiyoneldir.

`logo` kısmına dokümanın kategori adını yazdığınızda, (<i>sitede ki kod</i>) sonuna `.png` ekler ve sitede resim olarak görülmesini sağlar. Örneğin `"logo": "react"` yazdığınızda kod bunu `react.png` yapıp sitede `<img src="react.png" />` olarak kullanacaktır.

Şu logoları kullanabilirsiniz: `html`, `css`, `sass`, `javascript`, `es6`, `react`, `router`, `redux`, `vue`, `angular`, `gulp`, `grunt`, `webpack`, `github` (<i>doküman kategorisi ile ilgili logo listede yoksa boş bırakın. `"logo": ""`</i>)

Eklenecek örnek bir data:

```js
{
    "ad": "proje adı",
    "aciklama": "proje açıklaması",
    "link": "https://github.com/omergulcicek/proje",
    "logo": "javascript"
}
```

---

<i>Makale yada video içerikleri listeye eklemeyiniz. Bu tarz içerikleri <a href="https://github.com/fatihacet/turkcekaynaklar-com">Türkçe Kaynaklar</a> projesine ekleyerek destek olabilirsiniz.</i>

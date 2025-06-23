To Push To GH Pages Run the Following Commands

```npm run build```

-----

```git add -f dist```

-----

```git subtree add --prefix dist origin gh-pages```

----- 

```git commit -m "UPDATE MESSAGE HERE"```

----

```git subtree push --prefix dist origin gh-pages```

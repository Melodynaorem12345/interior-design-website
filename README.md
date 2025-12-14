# Creative (React + Vite)

## Scripts
- `npm run dev` — start the dev server.
- `npm run build` — production build (GH Pages workflow overrides the base path automatically).
- `npm run preview` — preview the production build locally.

## Deploying to GitHub Pages
1) Create a GitHub repo for this project and push the code to the `main` branch.  
2) In GitHub, open Settings → Pages and select **GitHub Actions** as the source.  
3) The workflow at `.github/workflows/deploy.yml` will build with `--base=/${{ github.event.repository.name }}/` so assets load correctly on Pages, then publish to the `github-pages` environment.  
4) Every push to `main` (or a manual `Run workflow`) will redeploy.  
5) If you use a custom domain or a user/organization Pages site (e.g. `username.github.io`), update the `--base` flag in the workflow to `/` so assets resolve from the root.

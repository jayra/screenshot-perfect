<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Restaurant content (menu, photos, business details) lives in `src/data/*.ts`; pages render from it — edit data, not JSX, to change dishes, prices or contact info.
- Missing business data is `null` and renders via `Pendiente`/`FotoSlot` placeholders, so nothing invented ever ships.

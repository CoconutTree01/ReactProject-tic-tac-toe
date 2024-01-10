import { Header } from "../components/header";
import { Game } from "../components/game-new";
import { UiTextField } from "../components/uikit/fields/ui-text-field";
import { UiSelectField, UiSelectSecondField } from "../components/uikit/fields/ui-select-field";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <UiSelectField
        label="Label"
        placeholder="Placeholder"
        required
        helperText="Helper text"
        options={[
          { label: "First label", value: 1 },
          { label: "Second label", value: 2 },
        ]}
      />
      <UiSelectSecondField
        label="Players"
        placeholder="Placeholder"
        helperText="Choose player"
        options={[
          { label: "First Player", value: 1 },
          { label: "Second Player", value: 2 },
        ]}
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}

import styled from "styled-components";
import classnames from "classnames";

const Container = styled.div`
  --stats-button-color: inherit;
  --stats-button-background: var(--vscode-editorIndentGuide-background);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;

  button {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: inherit;
    font: inherit;
    font-size: 10px;
    padding: 8px;
    border-radius: 2px;
    border: 0 none;
    cursor: pointer;
    position: relative;
    color: var(--stats-button-color);
    background: var(--stats-button-background);

    &:before {
      content: " ";
      position: absolute;
      top: calc(100% + 5px);
      left: 50%;
      transform: translateX(-50%);
      transform-origin: center center;
      opacity: 0;
      transition: opacity 0.2s;
      width: 25px;
      height: 3px;
      border-radius: 2px;
      background: var(--stats-button-background);
    }

    &:hover,
    &.active {
      &:before {
        opacity: 1;
      }
    }

    &.noerrors {
      opacity: 0.5;

      &,
      &:before {
        color: inherit;
        background: var(--vscode-editorIndentGuide-background);
      }
    }
  }

  b {
    font-weight: 600;
    font-size: 20px;
  }
`;

const Errors = styled.button`
  --stats-button-color: var(--vscode-button-foreground);
  --stats-button-background: var(--vscode-button-background);
`;

const Warnings = styled.button``;

const Success = styled.button``;

type TabsProps = {
  open: number;
  skipped: number;
  fixed: number;
  activeTab: string;
  onChange: (clicked: "open" | "skipped" | "fixed") => void;
};

export function Tabs({ open, skipped, fixed, activeTab, onChange }: TabsProps) {
  return (
    <Container>
      <Errors
        className={classnames({
          active: activeTab === "open",
          noerrors: open === 0,
        })}
        onClick={() => onChange("open")}
      >
        <b>{open}</b> open
        <br />
        error{open !== 1 ? "s" : ""}
      </Errors>
      <Warnings
        className={classnames({
          active: activeTab === "skipped",
          noerrors: skipped === 0,
        })}
        onClick={() => onChange("skipped")}
      >
        <b>{skipped}</b> skipped
        <br />
        error{skipped !== 1 ? "s" : ""}
      </Warnings>
      <Success
        className={classnames({
          active: activeTab === "fixed",
          noerrors: fixed === 0,
        })}
        onClick={() => onChange("fixed")}
      >
        <b>{fixed}</b> marked
        <br />
        fixed
      </Success>
    </Container>
  );
}

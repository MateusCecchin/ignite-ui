import { Label, MultistepContainer, Step, Steps } from "./styles";

export interface MultitepProps {
    size: number;
    currentStep?: number
}

export function Multistep({ size, currentStep = 1 }: MultitepProps) {
    return (
        <MultistepContainer >
            <Label>{currentStep} de {size}</Label>
            <Steps css={{ "--steps-size": size }}>
                {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
                    <Step key={step} active={currentStep >= step} />
                ))}
            </Steps>
        </MultistepContainer>
    )
}
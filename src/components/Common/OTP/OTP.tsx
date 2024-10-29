import * as React from 'react';
import {Input as BaseInput} from '@mui/base/Input';
import {Box} from '@mui/system';
import {OTPInputElement} from "./OTPInputElement";

type OTPProps = {
    separator: React.ReactNode;
    length: number;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const OTPInput: React.FC<OTPProps> = ({ separator, length, value, onChange }) => {
    const inputRefs = React.useRef<HTMLInputElement[]>(Array(length).fill(null));

    const focusInput = (targetIndex: number) => {
        inputRefs.current[targetIndex]?.focus();
    };

    const selectInput = (targetIndex: number) => {
        inputRefs.current[targetIndex]?.select();
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        currentIndex: number,
    ) => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case ' ':
                event.preventDefault();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (currentIndex < length - 1) {
                    focusInput(currentIndex + 1);
                    selectInput(currentIndex + 1);
                }
                break;
            case 'Delete':
                event.preventDefault();
                onChange((prevOtp) => {
                    const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
                    return otp;
                });
                break;
            case 'Backspace':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                onChange((prevOtp) => {
                    return prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
                });
                break;
            default:
                break;
        }
    };

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        currentIndex: number,
    ) => {
        const currentValue = event.target.value;
        if (!/^\d*$/.test(currentValue)) {
            return;
        }
        let indexToEnter = 0;

        while (indexToEnter <= currentIndex) {
            if (inputRefs.current[indexToEnter]?.value && indexToEnter < currentIndex) {
                indexToEnter += 1;
            } else {
                break;
            }
        }

        onChange((prev) => {
            const otpArray = prev.split('');
            otpArray[indexToEnter] = currentValue[currentValue.length - 1];
            return otpArray.join('');
        });

        if (currentValue !== '' && currentIndex < length - 1) {
            focusInput(currentIndex + 1);
        }
    };

    const handleClick = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>,
        currentIndex: number,
    ) => {
        selectInput(currentIndex);
    };

    const handlePaste = (
        event: React.ClipboardEvent<HTMLInputElement>,
        currentIndex: number,
    ) => {
        event.preventDefault();
        const clipboardData = event.clipboardData;

        if (clipboardData.types.includes('text/plain')) {
            let pastedText = clipboardData.getData('text/plain');
            pastedText = pastedText.substring(0, length).trim();

            pastedText = pastedText.replace(/\D/g, '');
            let indexToEnter = 0;

            while (indexToEnter <= currentIndex) {
                if (inputRefs.current[indexToEnter]?.value && indexToEnter < currentIndex) {
                    indexToEnter += 1;
                } else {
                    break;
                }
            }

            const otpArray = value.split('');

            for (let i = indexToEnter; i < length; i += 1) {
                otpArray[i] = pastedText[i - indexToEnter] ?? ' ';
            }

            onChange(otpArray.join(''));
        }
    };

    return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center'}}>
            {Array.from({ length }).map((_, index) => (
                <React.Fragment key={index}>
                    <BaseInput
                        slots={{
                            input: OTPInputElement,
                        }}
                        aria-label={`Digit ${index + 1} of OTP`}
                        slotProps={{
                            input: {
                                ref: (ele:any) => {
                                    inputRefs.current[index] = ele!;
                                },
                                inputMode: 'numeric',
                                onKeyDown: (event:any) => handleKeyDown(event, index),
                                onChange: (event:any) => handleChange(event, index),
                                onClick: (event:any) => handleClick(event, index),
                                onPaste: (event:any) => handlePaste(event, index),
                                value: value[index] ?? '',
                            },
                        }}
                    />
                    {index === length - 1 ? null : separator}
                </React.Fragment>
            ))}
        </Box>
    );
};






import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 300px;
  background: rgba(20, 20, 20, 0.6);
  z-index: 3;
  overflow: auto;
`;
export const Modal = styled.div`
  position: relative;
  border: 1px solid rgba(104, 104, 104, 0.2);
  padding: 60px 46px;
  background-color: var(--dark-grey);
  border-radius: 12px;
  max-width: 335px;
`;
export const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 12px;
  border: none;
  background-color: transparent;
  padding: 0;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
`;
export const Picture = styled.img`
  display: block;
  margin: 0 auto;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--white);
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: var(--input-title);
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--white);
`;

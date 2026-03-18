import { FaFilePdf, FaFileWord, FaEnvelope, FaExchangeAlt, FaCogs } from "react-icons/fa";

const FloatingIcons = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">

            {/* PDF - bottom left */}
            <div className="absolute left-[-10%] bottom-[30%] bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl animate-float1 border border-white/50">
                <FaFilePdf className="text-2xl text-[#E91E8C]" />
            </div>

            {/* Email - lower left */}
            <div className="absolute left-[20%] bottom-[17%] bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl animate-float2 border border-white/50">
                <FaEnvelope className="text-2xl text-[#7c3aed]" />
            </div>

            {/* DOCX - right center */}
            <div className="absolute right-[12%] top-[50%] -translate-y-1/2 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl animate-float3 border border-white/50 font-bold text-base text-[#1a1a2e]">
                DOCX
            </div>

            {/* Settings - top right */}
            <div className="absolute right-[20%] top-[18%] bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl animate-float4 border border-white/50">
                <FaCogs className="text-2xl text-[#06b6d4]" />
            </div>

            {/* Exchange - bottom right */}
            <div className="absolute right-[45%] bottom-[22%] bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl animate-float1 border border-white/50">
                <FaExchangeAlt className="text-2xl text-[#f97316]" />
            </div>

        </div>
    );
};
export default FloatingIcons
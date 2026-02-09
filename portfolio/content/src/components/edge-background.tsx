"use client";

export function EdgeBackground() {
    const floatingImages = [
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/584783989ebc4a5993ee608ab9a28a49-png-w600.avif", className: "float-img-1" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/c5eb7f9a362e4f0d85d4ec3485e0368a-png-w600.avif", className: "float-img-2" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/13d6899c05cc4fe5ba18802455859711-png-w600.avif", className: "float-img-3" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/56543fba2e384f5e94542b3af267a843-png-w600.avif", className: "float-img-4" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/0f8d4f25e24446a7830a99aa935c0939-png-w600.avif", className: "float-img-5" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/63877f9b620148b3be3b0f44398d41b2-png-w600.avif", className: "float-img-6" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/b2a76618905e4e51b4fded03c7cbb1c7-png-w600.avif", className: "float-img-7" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/ce69d4b13a084f008c8dfdae0ea83988-png-w600.avif", className: "float-img-8" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/d78c583d3c034772813e42c16ba75fd7-png-w600.avif", className: "float-img-9" },
        { src: "https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/3802ee6e790a4521ad0a70254f520db0-png-w600.avif", className: "float-img-10" },
    ];

    return (
        <div className="edge-background">
            {/* Main background image */}
            <img
                src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/e619eWJh8J6Mx9DrGXKEv3ojKmqw8Cv9pscK-jpg-w1920.avif"
                className="edge-bg-main"
                alt=""
                aria-hidden="true"
            />

            {/* Floating preview images */}
            <div className="edge-floating-images">
                {floatingImages.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        className={`edge-float-img ${img.className}`}
                        alt=""
                        aria-hidden="true"
                    />
                ))}
            </div>
        </div>
    );
}
